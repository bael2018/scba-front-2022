import { useDispatch } from "react-redux"
import {setUser} from '../../../store/slices/authSlice'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from "../Form";
import { useNavigate } from 'react-router-dom';
import { setModal } from "../../../store/slices/modalSlice";
import { useAddUserMutation } from "../../../store/rtk-query/usersApi";
import { rootContant } from "../../../constants";

const Register = () => {
    const [addUser] = useAddUserMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleRegister = (email , password) => {
        const auth = getAuth();

        if(email.trim().length && password.trim().length){
            createUserWithEmailAndPassword(auth , email , password)
            .then(({ user }) => {
                const body = { email: user.email }
                const uid = user.uid
                addUser({ body , uid })
                
                dispatch(setUser({
                    email: user.email,
                    id: uid
                }))

                localStorage.setItem(rootContant.isAuth , JSON.stringify(user.uid))
                navigate(JSON.parse(localStorage.getItem(rootContant.beforeAuthPath)))

                dispatch(setModal({
                    state: rootContant.success,
                    title: 'Account created !',
                    description: 'welcome to SCBA shop'
                }))
            })
            .catch(() => {
                dispatch(setModal({
                    state: rootContant.danger,
                    title: 'Invalid inputs !',
                    description: 'enter email and password'
                }))
            })
        }else{
            dispatch(setModal({
                state: rootContant.danger,
                title: 'Empty inputs !',
                description: 'enter email and password'
            }))
        }
    }

    return (
        <Form btnTitle='Sign up ' handleClick={handleRegister}/>
    )
}

export { Register }