import { useDispatch } from "react-redux"
import { removeUser } from "../../store/slices/authSlice"
import { rootPath } from "../../utilities/paths"
import cls from '../../scss/page/account.module.scss';
import { useNavigate } from 'react-router-dom';
import { setModal } from "../../store/slices/modalSlice";

const Account = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutBtn = () => {
        dispatch(removeUser())
        localStorage.removeItem(rootPath.isAuth)
        navigate(JSON.parse(localStorage.getItem(rootPath.beforeAuthPath)))
        
        dispatch(setModal({
            state: rootPath.success,
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