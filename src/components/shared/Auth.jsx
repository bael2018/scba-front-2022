import { useState } from "react";
import { Login } from "../../components/partials/user/Login";
import { Register } from "../../components/partials/user/Register";
import cls from "../../scss/components/auth.module.scss";

const Auth = () => {
    const [state, setState] = useState(true);
    return (
        <section className={cls.auth}>
            <div className={cls.auth_header}>
                <span
                    className={` ${state && cls.auth_header_btn}`}
                    onClick={() => setState(true)}
                >
                    LOGIN
                </span>
                <span
                    className={` ${!state && cls.auth_header_btn}`}
                    onClick={() => setState(false)}
                >
                    REGISTER
                </span>
            </div>
            <div className={cls.auth_body}>
                {state ? <Login /> : <Register />}
            </div>
        </section>
    );
};

export { Auth };
