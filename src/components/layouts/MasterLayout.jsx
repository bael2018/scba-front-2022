import { NavigationDefault } from '../shared/NavigationDefault'
import { NavigationMobile } from '../shared/NavigationMobile'
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
import { CartModal } from '../partials/CartModal'

const MasterLayout = () => {
    const show = useSelector(state => state.product_item.zoomImage)
    const { search , isCartModal , isBurgerMenu } = useSelector(state => state.general)
    const dispatch = useDispatch()

    useEffect(() => {
        if(search || show || isCartModal || isBurgerMenu){
            window.document.body.style.overflow = 'hidden'
        }else{
            window.document.body.style.overflowY = 'scroll'
            window.document.body.style.overflowX = 'hidden'
        }
    } , [search , show , isCartModal , isBurgerMenu]) 

    useEffect(() => {
        if(JSON.parse(sessionStorage.getItem(rootContant.userToken))){
            dispatch(setAuthStatus())
        }
    } , [])

    return (
        <section className={cls.root}>
            <NavigationDefault/>
            <NavigationMobile/>
            <div>
                <Outlet/>
            </div>
            <FooterDetault/>
            <Search/>
            <Modal/>
            <CartModal/>
        </section>
    )
}

export { MasterLayout }