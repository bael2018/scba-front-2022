import { BsCurrencyDollar } from "react-icons/bs";
import { BiRuble } from "react-icons/bi";

export const currencyIcon = (state, rubleText = "", dollarText = "") => {
    if (state) {
        return (
            <>
                <BsCurrencyDollar />
                {dollarText}
            </>
        );
    } else {
        return (
            <>
                <BiRuble />
                {rubleText}
            </>
        );
    }
};
