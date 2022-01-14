import cls from '../../scss/components/elements/selectedItem.module.scss'
import { Currency } from './Currency'

const SelectedItem = ({  }) => {
    return (
        <div className={cls.select}>
            <div className={cls.select_header}>
                <h3>Green Jacket</h3>
                <div className={cls.select_header_image}>
                    <img src="https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1615536628/D07205-124-990-M01/g-star-raw-basic-t-shirt-2-pack-black.jpg" alt="" />
                </div>
            </div>
            <div className={cls.select_body}>
                <Currency price={25} discountPrice={22}/>
                <div>
                    <button className={cls.select_body_add}>ADD TO CART</button>
                    <button className={cls.select_body_delete}>DELETE</button>
                </div>
            </div>
        </div>
    )   
}

export { SelectedItem }