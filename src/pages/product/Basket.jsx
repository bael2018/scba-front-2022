import { BreadCrumb } from "../../components/elements/BreadCrumb"

const Basket = () => {

    const breadCrumb = [
        {
            title: 'Home',
            path: '/',
            id: 1
        },
        {
            title: 'basket',
            active: true,
            path: '/basket',
            id: 2
        }
    ]

    return (
        <section>
            <BreadCrumb paths={breadCrumb}/>
            Basket
        </section>
    )
}

export { Basket }
