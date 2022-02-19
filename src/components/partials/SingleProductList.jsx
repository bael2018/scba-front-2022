import cls from '../../scss/components/partials/singleproductlist.module.scss'
import { useGetProductsQuery } from '../../store/rtk-query/productsApi'
import { setZoomImage } from "../../store/slices/productItemSlice"
import { SingleProductFooter } from "../../pages/product/SingleProductFooter"
import { fillterByid } from "../../utilities/fillterById"
import { toArrayWithId } from "../../utilities/toArray"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Currency } from "../elements/Currency"
import { Empty } from "./Empty"
import { ProductImages } from "./ProductImages"
import { ProductParams } from "./ProductParams"
import { ViewImage } from "./ViewImage"

const SingleProductList = () => {
    const { productId } = useSelector(state => state.product_item)
    const { data } = useGetProductsQuery()
    const [image , setImage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        setImage(fillterByid(data , productId)[0]?.mainImage)
    } , [])

    const activeImage = pic => {
        setImage(pic)
    }

    return (
        toArrayWithId(data).length ? 
        (
            <>
                {
                    fillterByid(data , productId)
                    .map(({ images , productCode , id , price , discountPrice , color , size , title }) => {
                        return (
                            <div key={id} className={cls.single}>
                                <ProductImages 
                                    images={images}
                                    active={image}
                                    setActive={activeImage}
                                />
                                <div 
                                    className={cls.single_image}
                                    onClick={() => dispatch(setZoomImage())}
                                >
                                    <img src={image} alt="inner" />
                                </div>
                                <div className={cls.single_body}>
                                    <h3>{title}</h3>
                                    <p>Product code: {productCode}</p>
                                    <Currency 
                                        price={price} 
                                        discountPrice={discountPrice}
                                    />
                                    <ProductParams 
                                        color={color} 
                                        size={size}
                                    />
                                    <SingleProductFooter id={id} />
                                </div>
                            </div>
                        )
                    })
                }
                <ViewImage image={image}/>
            </>
        ) : <Empty text={'Product'}/>
    )
}

export { SingleProductList }