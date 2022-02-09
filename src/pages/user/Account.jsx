import cls from '../../scss/page/account.module.scss';
import { useDispatch } from "react-redux"
import { removeUser } from "../../store/slices/authSlice"
import { useNavigate } from 'react-router-dom';
import { setModal } from "../../store/slices/modalSlice";
import { rootContant } from "../../constants";

const Account = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutBtn = () => {
        dispatch(removeUser())
        localStorage.removeItem(rootContant.isAuth)
        navigate(JSON.parse(localStorage.getItem(rootContant.beforeAuthPath)))
        
        dispatch(setModal({
            state: rootContant.success,
            title: 'Logged out !',
            description: 'comeback as soon as u can'
        }))
    }

    return (
        <section className={cls.account}>
            <h1>User account</h1>

            <button className={cls.account_btn} onClick={logOutBtn}>Log out</button>
        </section>
    )
}

export { Account }