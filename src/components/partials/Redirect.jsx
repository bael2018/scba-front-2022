import cls from "../../scss/components/partials/redirect.module.scss";
import { useNavigate } from "react-router-dom";

const Redirect = ({ text }) => {
    const navigate = useNavigate();

    return (
        <div className={cls.redirect}>
            <span onClick={() => navigate(`/user`)}>Login</span>
            <p>before adding items to the {text} !</p>
        </div>
    );
};

export { Redirect };
