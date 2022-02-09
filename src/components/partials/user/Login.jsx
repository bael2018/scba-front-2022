import { useDispatch } from "react-redux"
import {setUser} from '../../../store/slices/authSlice'
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from "../Form";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../../store/slices/modalSlice";
import { rootContant } from "../../../constants";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = (email , password) => {
        const auth = getAuth();

        if(email.trim().length && password.trim().length){
            signInWithEmailAndPassword(auth , email , password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }))

                localStorage.setItem(rootContant.isAuth , JSON.stringify(user.uid))
                navigate(JSON.parse(localStorage.getItem(rootContant.beforeAuthPath)))

                dispatch(setModal({
                    state: rootContant.success,
                    title: 'Account logged in !',
                    description: 'welcome back to SCBA shop'
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
        <Form btnTitle='Sign in' handleClick={handleLogin}/>
    )
}

export { Login }