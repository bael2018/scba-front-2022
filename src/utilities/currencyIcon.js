import { BiRuble } from "react-icons/bi"
import { BsCurrencyDollar } from "react-icons/bs"

export const currencyIcon = state => {
    if(state){
        return <BiRuble/>
    }else{
        return <BsCurrencyDollar/>
    }
}