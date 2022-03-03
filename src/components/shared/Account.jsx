import cls from '../../scss/page/account.module.scss';
import { useDispatch } from "react-redux"
import { removeAuthStatus, removeUser } from "../../store/slices/authSlice"
import { useNavigate } from 'react-router-dom';
import { setModal } from "../../store/slices/modalSlice";
import { rootContant } from "../../constants";
import { useGetUserQuery } from '../../store/rtk-query/usersApi';
import { toArrayWithId } from '../../utilities/toArray';

const Account = () => {
    const { data } = useGetUserQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutBtn = () => {
        dispatch(removeUser())
        sessionStorage.removeItem(rootContant.userToken)
        dispatch(removeAuthStatus())
        navigate('/')
        
        dispatch(setModal({
            state: rootContant.success,
            title: 'Logged out !',
            description: 'comeback as soon as u can'
        }))
    }

    return (
        <section className={cls.account}>
            <h1>User account</h1>

            <div>
                <h3>Email: <span>{toArrayWithId(data)[0]?.email}</span></h3>
                <button className={cls.account_btn} onClick={logOutBtn}>Log out</button>
            </div>
        </section>
    )
}

export { Account }