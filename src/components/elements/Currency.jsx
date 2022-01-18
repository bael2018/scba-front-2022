import { BiRuble } from "react-icons/bi"
import { BsCurrencyDollar } from "react-icons/bs"
import { useSelector } from "react-redux"
import { mathCurrency } from "../../utilities/mathCurrency"
import cls from '../../scss/components/elements/currency.module.scss'

const Currency = ({ discountPrice , price}) => {
    const state = useSelector(state =>  state.general.currency)

    return (
        <div className={cls.currency}>
            <span> 
                {state ? <BiRuble/> : <BsCurrencyDollar/>}
                { mathCurrency(state , price) }
            </span>
            {
                discountPrice && (
                <span className={cls.discountPrice}> 
                    {state ? <BiRuble/> : <BsCurrencyDollar/>}
                    { mathCurrency(state , discountPrice) }
                </span>
                )
            }
        </div>
    )
}

export { Currency }
