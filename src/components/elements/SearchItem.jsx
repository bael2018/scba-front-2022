import { setProductId } from "../../store/slices/productItemSlice";
import cls from "../../scss/components/elements/searchItem.module.scss";
import { currencyIcon } from "../../utilities/currencyIcon";
import { useSelector, useDispatch } from "react-redux";
import { Currency } from "./Currency";
import { Link } from "react-router-dom";
import { setSearchModal } from "../../store/slices/generalSlice";
import { mathCurrency } from "../../utilities";

const SearchItem = ({
    title,
    price,
    discountPrice,
    mainImage,
    id,
    category,
    subCategory,
}) => {
    const state = useSelector((state) => state.general.currency);
    const dispatch = useDispatch();

    const handleBtn = () => {
        dispatch(setProductId({ productId: id }));
        dispatch(setSearchModal());
    };

    return (
        <Link
            onClick={handleBtn}
            to={`/product/${category}/${subCategory}/${title}`}
            className={cls.search}
        >
            <div className={cls.search_image}>
                <img src={mainImage} alt="product" />
            </div>
            <div className={cls.search_body}>
                <p>{title}</p>
                {discountPrice ? (
                    <Currency discountPrice={discountPrice} price={price} />
                ) : (
                    <span className={cls.search_body_span}>
                        {currencyIcon(state)} {mathCurrency(state, price)}
                    </span>
                )}
            </div>
        </Link>
    );
};

export { SearchItem };
