import { NavigationDefault } from '../shared/NavigationDefault'
import { FooterDetault } from '../shared/FooterDefault'
import cls from '../../scss/style.module.scss'
import { Outlet } from 'react-router-dom'
import { Search } from '../shared/Search'
import { useSelector } from 'react-redux'
import { Modal } from '../partials/Modal'
import { useEffect } from 'react'
import { rootContant } from '../../constants'
import { useDispatch } from 'react-redux'
import { setAuthStatus } from '../../store/slices/authSlice'

const MasterLayout = () => {
    const show = useSelector(state => state.product_item.zoomImage)
    const modal = useSelector(state => state.general.search)
    const dispatch = useDispatch()

    useEffect(() => {
        if(modal || show){
            window.document.body.style.overflow = 'hidden'
        }else{
            window.document.body.style.overflowY = 'scroll'
            window.document.body.style.overflowX = 'hidden'
        }
    } , [modal , show]) 

    useEffect(() => {
        if(JSON.parse(localStorage.getItem(rootContant.authToken))){
            dispatch(setAuthStatus())
        }
    } , [])

    return (
        <section className={cls.root}>
            <NavigationDefault/>
            <Outlet/>
            <FooterDetault/>
            <Search/>
            <Modal/>
        </section>
    )
}

export { MasterLayout }