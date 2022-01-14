import cls from '../../scss/footer.module.scss'
import { CustomLink } from '../elements/CustomLink'

const initLinkState = [
    {   link: '#',
        title: 'INSTAGRAM',
        id: 1
    },
    {   link: '#',
        title: 'FACEBOOK',
        id: 2
    },
    {   link: '#',
        title: 'TELEGRAM',
        id: 3
    },
    {   link: '#',
        title: 'WHATSAPP',
        id: 4
    },
    {   link: '#',
        title: 'VKONTAKTE',
        id: 5
    },
]

const initContactState = [
    {
        title: 'HOME',
        styles: 'foot',
        path: '/',
        id: 1
    },
    {
        title: 'WOMAN',
        styles: 'foot',
        path: '/product/woman',
        id: 2
    },
    {
        title: 'MAN',
        styles: 'foot',
        path: '/product/man',
        id: 3
    },
    {
        title: 'KID',
        styles: 'foot',
        path: '/product/kid',
        id: 4
    },
    {
        title: 'ACCESSORIES',
        styles: 'foot',
        path: '/product/accessories',
        id: 5
    },
    {
        title: 'WISHLIST',
        styles: 'foot',
        path: '/wishlist',
        id: 6
    }
]

const FooterDetault = () => {
    return (
        <section className={cls.footer}>
            <h1>SCBA</h1>
            <div className={cls.footer_wrapper}>
                <div className={cls.footer_wrapper_child}>
                    <h3>Links</h3>
                    <ul>
                        {
                            initContactState.map(({ title , id , path , styles }) => {
                                return <li key={id}>
                                <CustomLink styles={styles} to={path}>
                                    {title}
                                </CustomLink>
                            </li>
                            })
                        }
                    </ul>
                </div>
                <div className={cls.footer_wrapper_child}>
                    <h3>Our contacts</h3>
                    <ul>
                        {
                            initLinkState.map(({ id , title , link}) => {
                                return  <li key={id}>
                                <a href={link}>
                                    {title}
                                </a>
                            </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export { FooterDetault }