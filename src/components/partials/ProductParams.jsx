import cls from "../../scss/components/partials/productparams.module.scss";

const ProductParams = ({ color, size, description }) => {
    return (
        <>
            {color && (
                <div className={cls.color}>
                    <span>COLOR :</span> {color}
                    <div className={cls.color_wrapper}>
                        <div style={{ background: color }}></div>
                    </div>
                </div>
            )}
            {size && (
                <div className={cls.size}>
                    <span>SIZE :</span> {size}
                    <div className={cls.size_wrapper}>
                        <div>{size}</div>
                    </div>
                </div>
            )}
            <div className={cls.content}>
                <h3>Description</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export { ProductParams };
