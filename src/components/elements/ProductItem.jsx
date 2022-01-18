import cls from '../../scss/components/elements/productItem.module.scss'
import { BiBasket } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { AiFillHeart } from 'react-icons/ai'
import { Currency } from './Currency'
import { Link } from 'react-router-dom'

const ProductItem = ({ product , path }) => {
    const view = useSelector(state => state.product_item.view)

    const { image , price , discountPrice , title } = product

    return (
        <section className={view ? `${cls.item} ${cls.item_alt}` : cls.item}>
            <div className={cls.item_image}>
                <img src={image} alt="inner" />
                <span>
                    <AiFillHeart/>
                </span>
                <span>
                    <BiBasket/>
                </span>
            </div>
            <div className={cls.item_body}>
                <h3>{title}</h3>

                <Currency 
                    discountPrice={discountPrice}
                    price={price}
                />

                <Link to={`${path}${title}`}>DISCOVER</Link>
            </div>
        </section>
    )
}

export { ProductItem }