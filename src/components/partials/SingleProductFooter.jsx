import cls from '../../scss/components/partials/singleproductfooter.module.scss'
import { useGetProductWishlistQuery, usePostProductWishlistMutation } from '../../store/rtk-query/productWishlist'
import { useGetProductCartQuery, usePostProductCartMutation } from '../../store/rtk-query/productCartApi'
import { toArrayWithId } from '../../utilities/toArray'
import { AiFillHeart } from "react-icons/ai"
import { useSelector } from 'react-redux'
import { rootContant } from '../../constants'
import { useNavigate } from 'react-router-dom'

const SingleProductFooter = ({ id }) => {
    const { data: wishlistData } = useGetProductWishlistQuery()
    const [ postWishlist ] = usePostProductWishlistMutation()
    const { isAuth } = useSelector(state => state.auth)
    const { data: cartData } = useGetProductCartQuery()
    const [ postCart ] = usePostProductCartMutation()
    const navigate = useNavigate()

    const productHandler = async (item , path) => {
        const userToken = JSON.parse(localStorage.getItem(rootContant.userToken))
        if(userToken){
            if(path === 'cart'){
                await postCart({
                    body: { productId: item },
                    id: userToken,
                    endpoint: path
                }).unwrap()
            }else{
                await postWishlist({
                    body: { productId: item },
                    id: userToken,
                    endpoint: path
                }).unwrap()
            }
        }else{  
            navigate('/user')
        }
    }

    return (
        <div className={cls.product_lower}>
            {
                isAuth ? (
                    <button 
                        onClick={() => productHandler(id ,'cart')}
                        className={toArrayWithId(cartData).map(({ productId }) => {
                            return ` ${productId === id && cls.product_lower_cart} `
                        })}
                    >ADD TO CART</button>
                ) : (
                    <button onClick={productHandler}>ADD TO CART</button>
                )
            }
            {
                isAuth ? (
                    <span 
                        onClick={() => productHandler(id ,'wishlist')}
                        className={toArrayWithId(wishlistData).map(({ productId }) => {
                            return ` ${productId === id && cls.product_lower_wish} `
                        })}
                    >
                        <AiFillHeart/>
                    </span>
                ) : (
                    <span onClick={productHandler}>
                        <AiFillHeart/>
                    </span>
                )
            }
        </div>
    )
}

export { SingleProductFooter }