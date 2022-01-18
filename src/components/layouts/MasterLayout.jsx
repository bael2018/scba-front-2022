import { NavigationDefault } from '../shared/NavigationDefault'
import { FooterDetault } from '../shared/FooterDefault'
import cls from '../../scss/style.module.scss'
import { Outlet } from 'react-router-dom'
import { Search } from '../shared/Search'

const MasterLayout = () => {
    return (
        <section className={cls.root}>
            <NavigationDefault/>
            <Outlet/>
            <FooterDetault/>

            <Search/>
        </section>
    )
}

export { MasterLayout }