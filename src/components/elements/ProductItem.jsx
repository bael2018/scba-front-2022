import {
    useGetProductWishlistQuery,
    usePostProductWishlistMutation,
} from "../../store/rtk-query/productWishlist";
import {
    useGetProductCartQuery,
    usePostProductCartMutation,
} from "../../store/rtk-query/productCartApi";
import cls from "../../scss/components/elements/productItem.module.scss";
import { currencyIcon } from "../../utilities/currencyIcon";
import { BiBasket } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setProductId } from "../../store/slices/productItemSlice";
import { AiFillHeart } from "react-icons/ai";
import { Currency } from "./Currency";
import { Link, useNavigate } from "react-router-dom";
import { rootContant } from "../../constants";
import { toArrayWithId } from "../../utilities/toArray";
import { mathCurrency } from "../../utilities";

const ProductItem = ({ product, path }) => {
    const state = useSelector((state) => state.general.currency);
    const view = useSelector((state) => state.product_item.view);
    const { data: wishlistData } = useGetProductWishlistQuery();
    const [postWishlist] = usePostProductWishlistMutation();
    const { isAuth } = useSelector((state) => state.auth);
    const { data: cartData } = useGetProductCartQuery();
    const [postCart] = usePostProductCartMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { mainImage, price, discountPrice, title, id } = product;

    const productHandler = async (path) => {
        const userToken = JSON.parse(
            sessionStorage.getItem(rootContant.userToken)
        );
        if (userToken) {
            if (path === "cart") {
                await postCart({
                    body: { productId: id },
                    id: userToken,
                    endpoint: path,
                }).unwrap();
            } else {
                await postWishlist({
                    body: { productId: id },
                    id: userToken,
                    endpoint: path,
                }).unwrap();
            }
        } else {
            navigate("/user");
        }
    };

    const activeIconHandler = (data) => {
        return toArrayWithId(data).map(
            ({ productId }) => {
                return ` ${productId === id && cls.item_btn} `;
            }
        )
    }

    return (
        <section className={view ? `${cls.item} ${cls.item_alt}` : cls.item}>
            <div className={cls.item_image}>
                <img src={mainImage} alt="productImage" />
                {isAuth ? (
                    <span
                        onClick={() => productHandler("wishlist")}
                        className={activeIconHandler(wishlistData)}
                    >
                        <AiFillHeart />
                    </span>
                ) : (
                    <span onClick={() => productHandler()}>
                        <AiFillHeart />
                    </span>
                )}
                {isAuth ? (
                    <span
                        onClick={() => productHandler("cart")}
                        className={activeIconHandler(cartData)}
                    >
                        <BiBasket />
                    </span>
                ) : (
                    <span onClick={() => productHandler()}>
                        <BiBasket />
                    </span>
                )}
            </div>
            <div className={cls.item_body}>
                <h3>{title}</h3>
                {discountPrice ? (
                    <Currency discountPrice={discountPrice} price={price} />
                ) : (
                    <span className={cls.item_body_span}>
                        {currencyIcon(state)}
                        {mathCurrency(state, price)}
                    </span>
                )}
                <Link
                    onClick={() => dispatch(setProductId({ productId: id }))}
                    to={path}
                >
                    DISCOVER
                </Link>
            </div>
        </section>
    );
};

export { ProductItem };
