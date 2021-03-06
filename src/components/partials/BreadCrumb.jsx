import cls from "../../scss/components/elements/breadCrumb.module.scss";
import { CustomLink } from "../elements/CustomLink";

const BreadCrumb = ({ paths }) => {
    return (
        <section className={cls.bread}>
            <span>
                <CustomLink to={"/"}>
                    Home
                    <span>/</span>
                </CustomLink>
            </span>
            {paths.length &&
                paths.map(({ title, path, id, active }) => {
                    return (
                        <span
                            className={` ${active && cls.breadActive}`}
                            key={id}
                        >
                            <CustomLink to={path}>
                                {title}
                                <span>{!active && "/"}</span>
                            </CustomLink>
                        </span>
                    );
                })}
        </section>
    );
};

export { BreadCrumb };
