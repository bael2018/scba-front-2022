import { Link, useParams } from "react-router-dom"
import cls from '../../scss/page/productPage.module.scss'
import { BreadCrumb } from "../../components/elements/BreadCrumb"
import { useEffect, useState } from "react"
import { CategorySkeleton } from "../../components/elements/skeletons/CategorySkeleton"

const ProductPage = () => {
    const { id } = useParams()
    const [ array , setArray ] = useState([])

    const initsState = [
        {
            title: 'Jeans',
            path: `${id}-first`,
            index: 1,
            image: 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1615536628/D07205-124-990-M01/g-star-raw-basic-t-shirt-2-pack-black.jpg'
        },
        {
            title: 'Pants',
            path: `${id}-second`,
            image: 'https://www.na-kd.com/globalassets/nakd_soft_rigid_wide_jeans_1660-000863-0047_01c_r.jpg?ref=C533FCE28C',
            index: 2
        },
        {
            title: 'third',
            path: `${id}-third`,
            image: 'https://www.na-kd.com/globalassets/nakd_soft_rigid_wide_jeans_1660-000863-0047_01c_r.jpg?ref=C533FCE28C',
            index: 3
        },
        {
            title: 'fourth',
            path: `${id}-fourth`,
            image: 'https://www.na-kd.com/globalassets/nakd_soft_rigid_wide_jeans_1660-000863-0047_01c_r.jpg?ref=C533FCE28C',
            index: 4
        },
        {
            title: 'fifth',
            path: `${id}-fifth`,
            image: 'https://www.na-kd.com/globalassets/nakd_soft_rigid_wide_jeans_1660-000863-0047_01c_r.jpg?ref=C533FCE28C',
            index: 5
        },
        {
            title: 'sixth',
            path: `${id}-sixth`,
            image: 'https://www.na-kd.com/globalassets/nakd_soft_rigid_wide_jeans_1660-000863-0047_01c_r.jpg?ref=C533FCE28C',
            index: 6
        }
    ]

    const breadCrumb = [
        {
            title: 'Home',
            path: '/',
            id: 1
        },
        {
            title: id,
            active: true,
            path: `/product/${id}`,
            id: 2
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setArray(initsState)
        } , 2000)
    } , [])

    return (
        <>
            <BreadCrumb paths={breadCrumb}/>
            <div className={cls.product_wrapper}>
                {
                   array.length ? (
                    array.map(({ index , path , title , image}) => {
                        return <Link 
                            key={index} to={`/product/${id}/${path}`}
                            className={cls.product_wrapper_child}
                        >
                            <span>{title}</span>
                            <img src={image} alt="inner" />
                    </Link>
                    })
                   ) : <CategorySkeleton length={initsState.length}/>
                }
            </div>
        </>
    )
}

export { ProductPage }