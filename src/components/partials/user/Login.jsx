import { useDispatch } from "react-redux";
import { setAuthStatus, setUser } from "../../../store/slices/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../../store/slices/modalSlice";
import { rootContant } from "../../../constants";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();

        if (email.trim().length && password.trim().length) {
            signInWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    dispatch(setAuthStatus());
                    dispatch(
                        setUser({
                            id: user.uid,
                        })
                    );

                    sessionStorage.setItem(
                        rootContant.userToken,
                        JSON.stringify(user.uid)
                    );
                    navigate("/");

                    dispatch(
                        setModal({
                            status: rootContant.success,
                            title: "Account logged in !",
                            description: "welcome back to SCBA shop",
                        })
                    );
                })
                .catch(() => {
                    dispatch(
                        setModal({
                            status: rootContant.danger,
                            title: "Invalid inputs !",
                            description: "enter email and password",
                        })
                    );
                });
        } else {
            dispatch(
                setModal({
                    status: rootContant.danger,
                    title: "Empty inputs !",
                    description: "enter email and password",
                })
            );
        }
    };

    return <Form btnTitle="Sign in" handleClick={handleLogin} />;
};

export { Login };
