import cls from "../../scss/components/elements/cartheader.module.scss";
import { cartInit } from "../../constants/init";

const CartHeader = () => {
    return (
        <div className={cls.cart_header}>
            <div>Product</div>
            <div>
                {cartInit.map(({ title, id }) => (
                    <span key={id}>{title}</span>
                ))}
            </div>
        </div>
    );
};

export { CartHeader };
