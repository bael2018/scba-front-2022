import { useParams } from "react-router-dom"
import cls from '../../scss/page/productItemPage.module.scss'
import { ProductItem } from "../../components/elements/ProductItem"
import { Filter } from "../../components/partials/Filter"
import { ProductSkeleton } from "../../components/elements/skeletons/ProductSkeleton"
import { useEffect, useState } from "react"
import { breadCrumbPath } from "../../utilities/bread"
import { BreadCrumb } from "../../components/partials/BreadCrumb"

const ProductItemPage = () => {
    const { item } = useParams()
    const {first , second} = breadCrumbPath(item)
    const [ array , setArray ] = useState([])

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
            active: true,
            path: `/product/${first}/${first}-${second}`,
            id: 3
        }
    ]

    const products = [
        {
            title: 'Bomber Jacket with Zipper Pockets',
            id: 1,
            price: '34',
            discountPrice: '30',
            image: 'https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800bb8/-473Wx593H-441105682-olive-MODEL.jpg',
        },
        {
            title: 'Bomber Jacket with Zipper Pockets',
            id: 2,
            price: '34',
            discountPrice: '30',
            image: 'https://assets.ajio.com/medias/sys_master/root/h11/ha6/13928487976990/-473Wx593H-440989395-navy-MODEL.jpg',
        },
        {
            title: 'Bomber Jacket with Zipper Pockets',
            id: 3,
            price: '34',
            discountPrice: '30',
            image: 'https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800bb8/-473Wx593H-441105682-olive-MODEL.jpg',
        },
        {
            title: 'Bomber Jacket with Zipper Pockets',
            id: 4,
            price: '34',
            discountPrice: '30',
            image: 'https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800bb8/-473Wx593H-441105682-olive-MODEL.jpg',
        },
        {
            title: 'Bomber Jacket with Zipper Pockets',
            id: 5,
            price: '34',
            discountPrice: '30',
            image: 'https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800bb8/-473Wx593H-441105682-olive-MODEL.jpg',
        },
        {
            title: 'Bomber Jacket with Zipper Pockets',
            id: 6,
            price: '34',
            discountPrice: '30',
            image: 'https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800bb8/-473Wx593H-441105682-olive-MODEL.jpg',
        },
        {
            title: 'Bomber Jacket with Zipper Pockets',
            id: 7,
            price: '34',
            discountPrice: '30',
            image: 'https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800bb8/-473Wx593H-441105682-olive-MODEL.jpg',
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setArray(products)
        } , 2000)
    } , [])

    return (
        <>
            <BreadCrumb paths={breadCrumb}/>
            <Filter/>
            <div className={cls.product_wrapper}>
                {
                    array.length ? products.map(item => {
                        return <ProductItem 
                            key={item.id} 
                            product={item}
                            path={`/product/${first}/${first}-${second}/${first}-${second}-`}
                        />
                    }) : <ProductSkeleton length={products.length}/>
                }
            </div>
        </>
    )
}

export { ProductItemPage } 