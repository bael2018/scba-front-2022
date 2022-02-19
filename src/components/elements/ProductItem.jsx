import cls from '../../scss/components/elements/productitem.module.scss'
import { mathCurrency } from '../../utilities/mathCurrency'
import { currencyIcon } from '../../utilities/currencyIcon'
import { BiBasket } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHeart } from 'react-icons/ai'
import { Currency } from './Currency'
import { Link } from 'react-router-dom'
import { setProductId } from '../../store/slices/productItemSlice'

const ProductItem = ({ product , path }) => {
    const state = useSelector(state =>  state.general.currency)
    const view = useSelector(state => state.product_item.view)
    const dispatch = useDispatch()

    const { mainImage , price , discountPrice , title , id } = product

    return (
        <section className={view ? `${cls.item} ${cls.item_alt}` : cls.item}>
            <div className={cls.item_image}>
                <img src={mainImage} alt="productImage" />
                <span>
                    <AiFillHeart/>
                </span>
                <span>
                    <BiBasket/>
                </span>
            </div>
            <div className={cls.item_body}>
                <h3>{title}</h3>
                {
                    discountPrice ? (
                        <Currency 
                            discountPrice={discountPrice}
                            price={price}
                        />
                    ) : (
                        <span className={cls.item_body_span}> 
                            { currencyIcon(state) }
                            { mathCurrency(state , price) }
                        </span>
                    )
                }
                <Link  
                    onClick={() => dispatch(setProductId({ productId: id }))}
                    to={`${path}${title}`}
                >DISCOVER</Link>
            </div>
        </section>
    )
}

export { ProductItem }