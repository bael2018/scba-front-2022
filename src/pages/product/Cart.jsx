import { useGetProductCartQuery } from "../../store/query/productCartApi";
import { Skeleton } from "../../components/elements/skeletons/Skeleton";
import { BreadCrumb } from "../../components/partials/BreadCrumb";
import { PagesTitle } from "../../components/elements/PagesTitle";
import { CartList } from "../../components/partials/CartList";
import { Redirect } from "../../components/partials/Redirect";
import cls from "../../scss/page/cart.module.scss";
import { useSelector } from "react-redux";

const Cart = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const { isLoading } = useGetProductCartQuery();

    const breadCrumb = [
        {
            title: "cart",
            active: true,
            path: "/cart",
            id: 2,
        },
    ];

    return (
        <section>
            <BreadCrumb paths={breadCrumb} />
            <div className={cls.cart}>
                <PagesTitle text={"Shopping cart"} />
                {isAuth ? (
                    isLoading ? (
                        <Skeleton styles={"cart"} />
                    ) : (
                        <CartList />
                    )
                ) : (
                    <Redirect text={"cart"} />
                )}
            </div>
        </section>
    );
};

export { Cart };
