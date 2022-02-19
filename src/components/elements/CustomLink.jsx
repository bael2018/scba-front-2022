import { Link , useMatch } from 'react-router-dom'
import cls from '../../scss/components/elements/customlink.module.scss'

const CustomLink = ({ children , to , styles, ...props }) => {
    const match = useMatch(to)

    return ( 
        <Link 
            to={to} 
            {...props}
            className={
                styles === 'nav' && match ? cls.nav_child_active : 
                styles === 'foot' && match ? cls.footer_child_active : ''
            }
        >
            {children}
        </Link>
    )
}

export { CustomLink }
