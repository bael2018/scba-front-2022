import { BreadCrumb } from '../../components/partials/BreadCrumb';
import { rootContant } from '../../constants';
import { Account } from './Account';
import { Auth } from './Auth';

const Logged = () => {
    const auth = JSON.parse(localStorage.getItem(rootContant.isAuth))

    const breadCrumb = [
        {
            title: 'Home',
            path: '/',
            id: 1
        },
        {
            title: 'user',
            active: true,
            path: `/user`,
            id: 2
        }
    ]

    return (
        <>
            <BreadCrumb paths={breadCrumb}/>
            {
                auth ? <Account/> : <Auth/>
            }
        </>
    )
}

export { Logged }