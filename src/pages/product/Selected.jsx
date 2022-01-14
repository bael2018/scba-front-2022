import { BreadCrumb } from "../../components/elements/BreadCrumb"
import { SelectedItem } from "../../components/elements/SelectedItem"
import cls from '../../scss/page/selected.module.scss'

const Selected = () => {

    const breadCrumb = [
        {
            title: 'Home',
            path: '/',
            id: 1
        },
        {
            title: 'wishlist',
            active: true,
            path: '/wishlist',
            id: 2
        }
    ]

    return (
        <>
            <BreadCrumb paths={breadCrumb}/>
            <div className={cls.container}>
                <div className={cls.container_title}>
                    
                </div>
                <div className={cls.container_body}>
                    <SelectedItem/>
                    <SelectedItem/>
                    <SelectedItem/>
                    <SelectedItem/>
                    <SelectedItem/>
                </div>
            </div>
        </>
    )
}

export { Selected }
