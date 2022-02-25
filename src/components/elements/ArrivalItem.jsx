import cls from '../../scss/components/elements/arrivalItem.module.scss'
import { setProductId } from '../../store/slices/productItemSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Currency } from './Currency'
import { mathCurrency } from '../../utilities/mathCurrency'
import { currencyIcon } from '../../utilities/currencyIcon'

const ArrivalItem = ({ mainImage , title , subCategory , id , category , price , discountPrice}) => {
    const state = useSelector(state =>  state.general.currency)
    const dispatch = useDispatch()

    return (
        <Link 
            onClick={() => dispatch(setProductId({ productId: id }))} 
            to={`/product/${category}/${subCategory}/${title}`} 
            className={cls.arrivalItem}
        >
            <div className={cls.arrivalItem_image}>
                <div className={cls.arrivalItem_image_cover}/>
                <div className={cls.arrivalItem_image_picture}>
                    <img src={mainImage} alt="arrivalImage" />
                </div>
            </div>
            <div className={cls.arrivalItem_body}>
                <h5>{subCategory}</h5>
                {
                    discountPrice ? <Currency discountPrice={discountPrice} price={price}/> : (
                        <span>
                            {currencyIcon(state)} {mathCurrency(state , price) }
                        </span>
                    )
                }
                <p>{title}</p>
            </div>
        </Link>
    )
}

export { ArrivalItem }