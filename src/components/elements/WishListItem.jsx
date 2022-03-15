import { rootContant } from "../../constants";
import cls from "../../scss/components/elements/wishlistitem.module.scss";
import {
    useGetProductCartQuery,
    usePostProductCartMutation,
} from "../../store/query/productCartApi";
import { useDeleteProductWishlistMutation } from "../../store/query/productWishlist";
import { toArrayWithId } from "../../utilities/toArray";
import { Currency } from "./Currency";

const WishlistItem = ({
    title,
    mainImage,
    price,
    discountPrice,
    cartId,
    id,
}) => {
    const userToken = JSON.parse(sessionStorage.getItem(rootContant.userToken));
    const [deleteProduct] = useDeleteProductWishlistMutation();
    const [postCart] = usePostProductCartMutation();
    const { data } = useGetProductCartQuery();

    const productHandler = async (path) => {
        if (path === "cart") {
            await postCart({
                body: { productId: id },
                id: userToken,
                endpoint: path,
            }).unwrap();
        } else {
            await deleteProduct({
                id: userToken,
                endpoint: path,
                cartId,
            }).unwrap();
        }
    };

    const activeIconHandler = () => {
        return toArrayWithId(data).map(({ productId }) => {
            return ` ${
                productId === id && cls.select_body_active
            } `;
        })
    }

    return (
        <div className={cls.select}>
            <div className={cls.select_header}>
                <div className={cls.select_header_image}>
                    <img src={mainImage} alt="wishlistItem" />
                </div>
            </div>
            <div className={cls.select_body}>
                <h3>{title}</h3>
                <div>
                    {discountPrice ? (
                        <Currency price={price} discountPrice={discountPrice} />
                    ) : (
                        <Currency price={price} />
                    )}
                </div>
                <div>
                    <button
                        className={activeIconHandler()}
                        onClick={() => productHandler("cart")}
                    >
                        ADD TO CART
                    </button>
                    <button onClick={() => productHandler("wishlist")}>
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};

export { WishlistItem };
