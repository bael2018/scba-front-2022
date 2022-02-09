import { NavigationDefault } from '../shared/NavigationDefault'
import { FooterDetault } from '../shared/FooterDefault'
import cls from '../../scss/style.module.scss'
import { Outlet } from 'react-router-dom'
import { Search } from '../shared/Search'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Modal } from '../partials/Modal'
import { rootContant } from '../../constants'

const MasterLayout = () => {
    const modal = useSelector(state => state.general.search)
    const show = useSelector(state => state.product_item.zoomImage)

    useEffect(() => {
        localStorage.setItem(rootContant.beforeAuthPath , JSON.stringify('/'))
    } , [])

    useEffect(() => {
        if(modal || show){
            window.document.body.style.overflow = 'hidden'
        }else{
            window.document.body.style.overflowY = 'scroll'
            window.document.body.style.overflowX = 'hidden'
        }
    } , [modal , show]) 

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