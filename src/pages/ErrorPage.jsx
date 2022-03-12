import { Link } from "react-router-dom";
import cls from "../scss/error.module.scss";

const ErrorPage = () => {
    return (
        <section className={cls.error}>
            <div>
                <h1>Opps!</h1>
                <h4>
                    <span>404</span> - PAGE NOT FOUND
                </h4>
                <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                </p>
                <Link to={"/"}>GO TO HOMEPAGE</Link>
            </div>
        </section>
    );
};

export { ErrorPage };
