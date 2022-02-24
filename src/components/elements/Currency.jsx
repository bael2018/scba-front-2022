import { useSelector } from "react-redux"
import { mathCurrency } from "../../utilities/mathCurrency"
import cls from '../../scss/components/elements/currency.module.scss'
import { currencyIcon } from "../../utilities/currencyIcon"

const Currency = ({ discountPrice , price }) => {
    const state = useSelector(state =>  state.general.currency)

    return (
        <div className={cls.currency}>
            {
                discountPrice ? (
                <>
                    <span> 
                        { currencyIcon(state) }
                        { mathCurrency(state , discountPrice) }
                    </span>
                    <span className={cls.discountPrice}> 
                        { currencyIcon(state) }
                        { mathCurrency(state , price) }
                    </span>
                </>
                ) : (
                    <span> 
                        { currencyIcon(state) }
                        { mathCurrency(state , price) }
                    </span>
                )
            }
        </div>
    )
}

export { Currency }
