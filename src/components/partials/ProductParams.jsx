import cls from '../../scss/components/partials/productparams.module.scss'

const ProductParams = ({ color , size }) => {
    return (
        <>
            {
                color && (
                    <div className={cls.color}>
                        <span>COLOR :</span> {color}
                        <div className={cls.color_wrapper}>
                            <div style={{ background: color }}></div>
                        </div>
                    </div>
                )
            }
            {
                size && (
                <div className={cls.size}>
                    <span>SIZE :</span> {size}
                    <div className={cls.size_wrapper}>
                        <div>{size}</div>
                    </div>
                </div>
                )
            }
        </>
    )
}

export { ProductParams }