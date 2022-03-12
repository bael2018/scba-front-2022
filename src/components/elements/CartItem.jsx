import { useDeleteProductCartMutation } from "../../store/rtk-query/productCartApi";
import cls from "../../scss/components/elements/cartItem.module.scss";
import { currencyIcon } from "../../utilities/currencyIcon";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { rootContant } from "../../constants";
import {
    decrementTotalPrice,
    decrementTotalQuantity,
    incrementTotalPrice,
    incrementTotalQuantity,
    setCartActive,
    setTotalDiscountPrice,
    setTotalPrice,
    setTotalQuantity,
} from "../../store/slices/generalSlice";
import { mathCurrency } from "../../utilities";

const CartItem = ({ title, mainImage, price, discountPrice, cartId }) => {
    const { currency, isCart } = useSelector((state) => state.general);
    const [deleteProduct] = useDeleteProductCartMutation();
    const [quant, setQuant] = useState(1);
    const dispatch = useDispatch();

    const incrementQuant = () => {
        if (quant > 1) {
            setQuant((prev) => prev - 1);
            dispatch(decrementTotalQuantity());
            dispatch(decrementTotalPrice(+price));
        }
    };

    const decrementQuant = () => {
        setQuant((prev) => prev + 1);
        dispatch(incrementTotalQuantity());
        dispatch(incrementTotalPrice(+price));
    };

    const deleteBtnHandler = async () => {
        await deleteProduct({
            id: JSON.parse(sessionStorage.getItem(rootContant.userToken)),
            endpoint: "cart",
            cartId,
        }).unwrap();
    };

    useEffect(() => {
        if (!isCart) {
            dispatch(setTotalPrice(+price));
            dispatch(setTotalQuantity(quant));
            if (discountPrice)
                dispatch(setTotalDiscountPrice(+price - +discountPrice));
        }
        dispatch(setCartActive());
    }, []);

    return (
        <div className={cls.cart}>
            <div className={cls.cart_info}>
                <img src={mainImage} alt="cartImage" />
                <h3>{title}</h3>
            </div>
            <div className={cls.cart_wrapper}>
                <span
                    onClick={deleteBtnHandler}
                    className={cls.cart_wrapper_remove}
                >
                    remove
                </span>
                <div className={cls.cart_wrapper_price}>
                    {mathCurrency(currency, price)} {currencyIcon(currency)}
                </div>
                <div className={cls.cart_wrapper_quantity}>
                    <div>
                        <p>{quant}</p>
                        <span
                            className={cls.cart_wrapper_quantity_minus}
                            onClick={incrementQuant}
                        >
                            -
                        </span>
                        <span
                            className={cls.cart_wrapper_quantity_plus}
                            onClick={decrementQuant}
                        >
                            +
                        </span>
                    </div>
                </div>
                <div className={cls.cart_wrapper_total}>
                    {mathCurrency(currency, price * quant)}{" "}
                    {currencyIcon(currency)}
                </div>
            </div>
        </div>
    );
};

export { CartItem };
