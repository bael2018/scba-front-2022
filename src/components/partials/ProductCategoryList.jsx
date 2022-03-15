import { useGetCategoriesQuery } from "../../store/query/categoryApi";
import cls from "../../scss/components/partials/productcategorylist.module.scss";
import { toArrayWithId } from "../../utilities/toArray";
import { Link } from "react-router-dom";
import { Empty } from "./Empty";

const ProductCategoryList = ({ id }) => {
    const { data } = useGetCategoriesQuery();

    return toArrayWithId(data).length ? (
        toArrayWithId(data)
            .filter(({ category }) => {
                return category.toLowerCase() === id;
            })
            .map(({ id: index, subCategory, image }) => {
                return (
                    <Link
                        key={index}
                        to={`/product/${id}/${id + "-" + subCategory}`}
                        className={cls.product_child}
                    >
                        <span>{subCategory}</span>
                        <img src={image} alt="inner" />
                    </Link>
                );
            })
    ) : (
        <Empty text={"Categories"} />
    );
};

export { ProductCategoryList };
