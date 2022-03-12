import cls from "../../scss/components/partials/empty.module.scss";

const Empty = ({ text }) => {
    return (
        <div className={cls.empty}>
            No<span>{text}</span>items found !
        </div>
    );
};

export { Empty };
