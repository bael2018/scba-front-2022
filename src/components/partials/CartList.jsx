import { useGetProductCartQuery } from "../../store/rtk-query/productCartApi"
import { useGetProductsQuery } from "../../store/rtk-query/productsApi"
import cls from '../../scss/components/partials/cartlist.module.scss'
import { toArrayWithId } from "../../utilities/toArray"
import { CartHeader } from "../elements/CartHeader"
import { CartItem } from "../elements/CartItem"
import { Empty } from "./Empty"

const CartList = () => {
    const { data: productData } = useGetProductsQuery() 
    const { data } = useGetProductCartQuery()

    return (
        toArrayWithId(data).length ? (
            <>
                <CartHeader/>
                <div className={cls.cart_body}>
                    {
                        toArrayWithId(data).length ? (
                            toArrayWithId(productData).map(item => {
                                return toArrayWithId(data).map(({ productId , id: cartId }) => {
                                    if(item.id === productId){
                                        let body = {...item , cartId: cartId}
                                        return <CartItem key={item.id} {...body}/>
                                    }
                                })
                            })
                        ) : <Empty text={'Cart'}/>
                    }
                </div>
            </>
        ) : <Empty text={'Cart'}/>
    )
}

export { CartList }