import { useDeleteProductCartMutation } from '../../store/rtk-query/productCartApi';
import cls from '../../scss/components/elements/cartitem.module.scss';
import { currencyIcon } from '../../utilities/currencyIcon';
import { mathCurrency } from '../../utilities/mathCurrency';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { rootContant } from '../../constants';

const CartItem = ({ title , mainImage , price , discountPrice , cartId }) => {
    const state = useSelector(state => state.general.currency)
    const [deleteProduct] = useDeleteProductCartMutation()
    const [quant , setQuant] = useState(1)

    const incrementQuant = () => {
        if(quant > 1){
            setQuant(prev => prev - 1)
        }
    }
    
    const decrementQuant = () => {
        setQuant(prev => prev + 1)
    }

    const deleteBtnHandler = async () => {
        await deleteProduct({ 
            id: JSON.parse(localStorage.getItem(rootContant.authToken)), 
            endpoint: 'cart',
            cartId
        }).unwrap()
    }

    return (
        <div className={cls.cart}>
            <div className={cls.cart_info}>
                <img src={mainImage} alt="cartImage" />
                <h3>{title}</h3>
            </div>
            <div className={cls.cart_wrapper}>
                <span onClick={deleteBtnHandler} className={cls.cart_wrapper_remove}>remove</span>
                <div className={cls.cart_wrapper_price}>
                    {
                        discountPrice ? (
                            <>
                                {mathCurrency(state , discountPrice)}
                                {currencyIcon(state)}
                            </>
                        ) : (
                            <>
                                {mathCurrency(state , price)}
                                {currencyIcon(state)}
                            </>
                        )
                    }
                </div>
                <div className={cls.cart_wrapper_quantity}>
                    <div>
                        <p>{quant}</p>
                        <span 
                            className={cls.cart_wrapper_quantity_minus}
                            onClick={incrementQuant}
                        >-</span>
                        <span 
                            className={cls.cart_wrapper_quantity_plus}
                            onClick={decrementQuant}
                        >+</span>
                    </div>
                </div>
                <div className={cls.cart_wrapper_total}>
                    {
                        discountPrice ? (
                            <>
                                {mathCurrency(state , discountPrice * quant)}
                                {currencyIcon(state)}
                            </>
                        ) : (
                            <>
                                {mathCurrency(state , price * quant)}
                                {currencyIcon(state)}
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export { CartItem }