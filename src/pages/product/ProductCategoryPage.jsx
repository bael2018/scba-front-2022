import { ProductCategoryList } from "../../components/partials/ProductCategoryList";
import { useGetCategoriesQuery } from "../../store/rtk-query/categoryApi";
import { Skeleton } from "../../components/elements/skeletons/Skeleton";
import cls from "../../scss/page/productcategorypage.module.scss";
import { BreadCrumb } from "../../components/partials/BreadCrumb";
import { useParams } from "react-router-dom";

const ProductCategoryPage = () => {
    const { isLoading } = useGetCategoriesQuery();
    const { id } = useParams();

    const breadCrumb = [
        {
            title: id,
            active: true,
            path: `/product/${id}`,
            id: 2,
        },
    ];

    return (
        <>
            <BreadCrumb paths={breadCrumb} />
            <div className={cls.product_wrapper}>
                {isLoading ? (
                    <Skeleton styles={"category"} />
                ) : (
                    <ProductCategoryList id={id} />
                )}
            </div>
        </>
    );
};

export { ProductCategoryPage };
