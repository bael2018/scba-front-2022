import { SingleProductList } from '../../components/partials/SingleProductList'
import { BreadCrumb } from "../../components/partials/BreadCrumb"
import { breadCrumbPath } from "../../utilities/bread"
import { useParams } from "react-router-dom"

const SingleProductPage = () => {
    const { product } = useParams()
    const { first , second , third } = breadCrumbPath(product)

    const breadCrumb = [
        {
            title: 'Home',
            path: '/',
            id: 1
        },
        {
            title: first,
            path: `/product/${first}`,
            id: 2
        },
        {
            title: second,
            path: `/product/${first}/${first}-${second}`,
            id: 3
        },
        {
            title: third,
            active: true,
            path: `/product/${first}/${first}-${second}/${first}-${second}-${third}`,
            id: 4
        }
    ]

    return (
        <> 
            <BreadCrumb paths={breadCrumb}/> : <SingleProductList/>
        </>
    )
}

export { SingleProductPage }
