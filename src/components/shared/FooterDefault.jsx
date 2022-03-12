import { initContactState, initLinkState } from "../../constants/init";
import cls from "../../scss/components/footer.module.scss";
import { CustomLink } from "../elements/CustomLink";

const FooterDetault = () => {
    return (
        <section className={cls.footer}>
            <h1>SCBA</h1>
            <div className={cls.footer_wrapper}>
                <div className={cls.footer_wrapper_child}>
                    <h3>Links</h3>
                    <ul>
                        {initContactState.map(({ title, id, path, styles }) => {
                            return (
                                <li key={id}>
                                    <CustomLink styles={styles} to={path}>
                                        {title}
                                    </CustomLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={cls.footer_wrapper_child}>
                    <h3>Our contacts</h3>
                    <ul>
                        {initLinkState.map(({ id, title, link }) => {
                            return (
                                <li key={id}>
                                    <a href={link}>{title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { FooterDetault };
