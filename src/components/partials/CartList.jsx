import { useGetProductCartQuery } from "../../store/rtk-query/productCartApi";
import { useGetProductsQuery } from "../../store/rtk-query/productsApi";
import cls from "../../scss/components/partials/cartlist.module.scss";
import { setCartModalActive } from "../../store/slices/generalSlice";
import { toArrayWithId } from "../../utilities/toArray";
import { CartHeader } from "../elements/CartHeader";
import { CartItem } from "../elements/CartItem";
import { Empty } from "./Empty";
import { useDispatch } from "react-redux";

const CartList = () => {
    const { data: productData } = useGetProductsQuery();
    const { data } = useGetProductCartQuery();
    const dispatch = useDispatch();

    const confirmBtnHandler = () => {
        dispatch(setCartModalActive());
    };

    return toArrayWithId(data).length ? (
        <>
            <CartHeader />
            <div className={cls.cart_body}>
                {toArrayWithId(data).length ? (
                    toArrayWithId(productData).map((item) => {
                        return toArrayWithId(data).map(
                            ({ productId, id: cartId }) => {
                                if (item.id === productId) {
                                    let body = { ...item, cartId: cartId };
                                    return (
                                        <CartItem
                                            key={item.id}
                                            {...body}
                                            length={toArrayWithId(data).length}
                                        />
                                    );
                                }
                            }
                        );
                    })
                ) : (
                    <Empty text={"Cart"} />
                )}
            </div>
            <div className={cls.cart_btn}>
                <button onClick={confirmBtnHandler}>COMPLETE</button>
            </div>
        </>
    ) : (
        <Empty text={"Cart"} />
    );
};

export { CartList };
