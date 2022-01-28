import { useDispatch } from "react-redux"
import {setUser} from '../../../store/slices/authSlice'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from "../Form";
import { useNavigate } from 'react-router-dom';
import { rootPath } from "../../../utilities/paths";
import { setModal } from "../../../store/slices/modalSlice";
import { useAddUserMutation } from "../../../store/rtk-query/usersApi";

const Register = () => {
    const [addUser , {}] = useAddUserMutation()
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

                localStorage.setItem(rootPath.isAuth , JSON.stringify(user.uid))
                navigate(JSON.parse(localStorage.getItem(rootPath.beforeAuthPath)))

                dispatch(setModal({
                    state: rootPath.success,
                    title: 'Account created !',
                    description: 'welcome to SCBA shop'
                }))
            })
            .catch(() => {
                dispatch(setModal({
                    state: rootPath.danger,
                    title: 'Invalid inputs !',
                    description: 'enter email and password'
                }))
            })
        }else{
            dispatch(setModal({
                state: rootPath.danger,
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