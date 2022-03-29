import cls from "../../scss/components/partials/singleproductfooter.module.scss";
import {
    useGetProductWishlistQuery,
    usePostProductWishlistMutation,
} from "../../store/query/productWishlist";
import {
    useGetProductCartQuery,
    usePostProductCartMutation,
} from "../../store/query/productCartApi";
import { toArrayWithId } from "../../utilities/toArray";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { rootContant } from "../../constants";
import { useNavigate } from "react-router-dom";

const SingleProductFooter = ({ id }) => {
    const userToken = JSON.parse(sessionStorage.getItem(rootContant.userToken));
    const { data: wishlistData } = useGetProductWishlistQuery(userToken);
    const [postWishlist] = usePostProductWishlistMutation();
    const { isAuth } = useSelector((state) => state.auth);
    const { data: cartData } = useGetProductCartQuery(userToken);
    const [postCart] = usePostProductCartMutation();
    const navigate = useNavigate();

    const productHandler = async (item, path) => {
        if (userToken) {
            if (path === "cart") {
                await postCart({
                    body: { productId: item },
                    id: userToken,
                    endpoint: path,
                }).unwrap();
            } else {
                await postWishlist({
                    body: { productId: item },
                    id: userToken,
                    endpoint: path,
                }).unwrap();
            }
        } else {
            navigate("/user");
        }
    };

    const activeIconHandler = (data , styles) => {
        return toArrayWithId(data).map(({ productId }) => {
            return ` ${
                productId === id && styles
            } `;
        })
    }

    return (
        <div className={cls.product_lower}>
            {isAuth ? (
                <button
                    onClick={() => productHandler(id, "cart")}
                    className={activeIconHandler(cartData , cls.product_lower_cart)}
                >
                    ADD TO CART
                </button>
            ) : (
                <button onClick={productHandler}>ADD TO CART</button>
            )}
            {isAuth ? (
                <span
                    onClick={() => productHandler(id, "wishlist")}
                    className={activeIconHandler(wishlistData , cls.product_lower_wish)}
                >
                    <AiFillHeart />
                </span>
            ) : (
                <span onClick={productHandler}>
                    <AiFillHeart />
                </span>
            )}
        </div>
    );
};

export { SingleProductFooter };
