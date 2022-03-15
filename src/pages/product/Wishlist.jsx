import { useGetProductWishlistQuery } from "../../store/query/productWishlist";
import { WishlistItem } from "../../components/elements/WishListItem";
import { useGetProductsQuery } from "../../store/query/productsApi";
import { Skeleton } from "../../components/elements/skeletons/Skeleton";
import { BreadCrumb } from "../../components/partials/BreadCrumb";
import cls from "../../scss/page/wishlist.module.scss";
import { toArrayWithId } from "../../utilities/toArray";
import { useSelector } from "react-redux";
import { Empty } from "../../components/partials/Empty";
import { Redirect } from "../../components/partials/Redirect";
import { PagesTitle } from "../../components/elements/PagesTitle";

const Wishlist = () => {
    const { data, isLoading } = useGetProductWishlistQuery();
    const { data: productData } = useGetProductsQuery();
    const { isAuth } = useSelector((state) => state.auth);

    const breadCrumb = [
        {
            title: "wishlist",
            active: true,
            path: "/wishlist",
            id: 2,
        },
    ];

    return (
        <>
            <BreadCrumb paths={breadCrumb} />
            <div className={cls.container}>
                <PagesTitle text={"Wishlist"} />
                {isAuth ? (
                    isLoading ? (
                        <Skeleton styles={"category"} />
                    ) : (
                        <div className={cls.container_body}>
                            {toArrayWithId(data).length ? (
                                toArrayWithId(productData).map((item) => {
                                    return toArrayWithId(data).map(
                                        ({ productId, id: cartId }) => {
                                            if (item.id === productId) {
                                                let body = {
                                                    ...item,
                                                    cartId: cartId,
                                                };
                                                return (
                                                    <WishlistItem
                                                        key={item.id}
                                                        {...body}
                                                    />
                                                );
                                            }
                                        }
                                    );
                                })
                            ) : (
                                <Empty text={"Wishlist"} />
                            )}
                        </div>
                    )
                ) : (
                    <Redirect text={"wishlist"} />
                )}
            </div>
        </>
    );
};

export { Wishlist };
