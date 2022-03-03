import { BreadCrumb } from '../../components/partials/BreadCrumb';
import { Account } from '../../components/shared/Account';
import { Auth } from '../../components/shared/Auth';
import { rootContant } from '../../constants';

const Logged = () => {
    const auth = JSON.parse(sessionStorage.getItem(rootContant.userToken))

    const breadCrumb = [
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