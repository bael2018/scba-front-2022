import { useSelector } from 'react-redux';
import cls from '../../scss/components/elements/cartItem.module.scss';
import { currencyIcon } from '../../utilities/currencyIcon';
import { mathCurrency } from '../../utilities/mathCurrency';

const CartItem = () => {
    const state = useSelector(state => state.general.currency)

    return (
        <div className={cls.cart}>
            <div className={cls.cart_info}>
                <img src="https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51081-16049?_s=RAABAB0" alt="" />
                <h3>Men's Wool Jackets & Coats | Pendleton</h3>
            </div>
            <div className={cls.cart_wrapper}>
                <div className={cls.cart_wrapper_price}>
                    {mathCurrency(state , 400)} {currencyIcon(state)}
                </div>
                <div className={cls.cart_wrapper_quantity}>
                    <div>
                        <input type="text" />
                        <span className={cls.cart_wrapper_quantity_minus}>-</span>
                        <span className={cls.cart_wrapper_quantity_plus}>+</span>
                    </div>
                    <p>Remove</p>
                </div>
                <div className={cls.cart_wrapper_total}>
                    {mathCurrency(state , 400)} {currencyIcon(state)}
                </div>
            </div>
        </div>
    )
}

export { CartItem }