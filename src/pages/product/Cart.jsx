import { useSelector } from "react-redux";
import { CartItem } from "../../components/elements/CartItem";
import { BreadCrumb } from "../../components/partials/BreadCrumb";
import cls from '../../scss/page/cart.module.scss';
import { currencyIcon } from "../../utilities/currencyIcon";
import { mathCurrency } from "../../utilities/mathCurrency";

const Cart = () => {
    const state = useSelector(state =>  state.general.currency)

    const breadCrumb = [
        {
            title: 'Home',
            path: '/',
            id: 1
        },
        {
            title: 'cart',
            active: true,
            path: '/cart',
            id: 2
        }
    ]

    return (
        <section>
            <BreadCrumb paths={breadCrumb}/>
            <div className={cls.cart}>
                <h2 className={cls.cart_title}>Shopping cart</h2>
                <div className={cls.cart_header}>
                    <div>
                        Product
                    </div>
                    <div>
                        <span>
                            Price
                        </span>
                        <span>
                            Quantity
                        </span>
                        <span>  
                            Total
                        </span>
                    </div>
                </div>
                <div className={cls.cart_body}>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className={cls.cart_footer}>
                    Subtotal: <span>{mathCurrency(state , 400)} {currencyIcon(state)}</span>
                </div>
            </div>
        </section>
    )
}

export { Cart }
