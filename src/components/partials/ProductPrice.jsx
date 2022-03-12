import cls from "../../scss/components/elements/productPrice.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import { setActivePrice } from "../../utilities/activeKey";
import { initPriceState } from "../../constants/init";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../store/slices/productItemSlice";

const ProductPrice = () => {
    const { price } = useSelector((state) => state.product_item);
    const [array, setArray] = useState(initPriceState);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const setPriceHandler = (e, status) => {
        setArray((prev) => setActivePrice(prev, e));
        dispatch(setPrice(status));
    };

    return (
        <section
            className={show ? `${cls.price} ${cls.price_active}` : cls.price}
            onClick={() => setShow((prev) => !prev)}
        >
            <h4>
                Price <AiOutlineDown />
            </h4>

            <div className={` ${show && cls.price_wrapper_active}`}>
                {array.map(({ id, title }) => {
                    return (
                        <p key={id} onClick={() => setPriceHandler(id, title)}>
                            <span
                                className={` ${
                                    title === price && cls.active_span
                                }`}
                            ></span>
                            {title}
                        </p>
                    );
                })}
            </div>
        </section>
    );
};

export { ProductPrice };
