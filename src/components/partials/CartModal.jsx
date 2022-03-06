import cls from '../../scss/components/partials/cartmodal.module.scss'
import { useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setCartModalActive } from '../../store/slices/generalSlice'
import { currencyIcon } from '../../utilities/currencyIcon'
import { mathCurrency } from '../../utilities'

const CartModal = () => {
    const { 
        isCartModal, 
        totalPrice, 
        totalQuantity, 
        totalDiscountPrice ,
        currency
    } = useSelector(state => state.general)
    const dispatch = useDispatch()

    return (
        <div className={`${cls.modal} ${isCartModal && cls.modal_active}`}>
            <div className={cls.modal_wrapper}>
                <span 
                    onClick={() => dispatch(setCartModalActive())}
                    className={cls.modal_wrapper_closer}
                >
                    <AiOutlineClose/>
                </span>
                <div className={cls.modal_wrapper_body}>
                    <h4>Products: <span>{totalQuantity}</span></h4>
                    <div>
                        <h3>SubTotalPrice:</h3>
                        <span>{mathCurrency(currency , totalPrice)}{currencyIcon(currency)}</span>
                    </div>
                    {
                        totalDiscountPrice !== 0 && (
                            <div>
                                <h3>TotalDiscounts:</h3>
                                <span>{
                                    mathCurrency(currency , totalDiscountPrice)}{currencyIcon(currency)
                                }</span>
                            </div>
                        )
                    }
                    <p>Total: <span>{
                        mathCurrency(currency , totalPrice - totalDiscountPrice)}{currencyIcon(currency)
                    }</span> </p>
                </div>
            </div>
        </div>
    )
}

export { CartModal }