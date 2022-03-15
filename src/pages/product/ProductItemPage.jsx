import { useParams } from "react-router-dom";
import cls from "../../scss/page/productItemPage.module.scss";
import { Filter } from "../../components/partials/Filter";
import { breadCrumbPath } from "../../utilities/bread";
import { BreadCrumb } from "../../components/partials/BreadCrumb";
import { Skeleton } from "../../components/elements/skeletons/Skeleton";
import { useGetProductsQuery } from "../../store/query/productsApi";
import { toLower } from "../../utilities";
import { ProductItemList } from "../../components/partials/ProductItemList";
import { toArrayWithId } from "../../utilities/toArray";
import { filterProductItems } from "../../utilities/fillters";

const ProductItemPage = () => {
    const { data, isLoading } = useGetProductsQuery();
    const { item } = useParams();
    const { first, second } = breadCrumbPath(item);

    const breadCrumb = [
        {
            title: first,
            path: `/product/${first}`,
            id: 2,
        },
        {
            title: toLower(second),
            active: true,
            path: `/product/${first}/${first}-${toLower(second)}`,
            id: 3,
        },
    ];

    return (
        <>
            <BreadCrumb paths={breadCrumb} />
            {filterProductItems(toArrayWithId(data), first, second).length ? (
                <Filter />
            ) : null}
            <div className={cls.product_wrapper}>
                {isLoading ? (
                    <Skeleton styles={"product"} />
                ) : (
                    <ProductItemList first={first} second={second} />
                )}
            </div>
        </>
    );
};

export { ProductItemPage };
