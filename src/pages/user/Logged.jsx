import { BreadCrumb } from '../../components/elements/BreadCrumb';
import { rootPath } from '../../utilities/paths';
import { Account } from './Account';
import { Auth } from './Auth';

const Logged = () => {
    const auth = JSON.parse(localStorage.getItem(rootPath.isAuth))

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