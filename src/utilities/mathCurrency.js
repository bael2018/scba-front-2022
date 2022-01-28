
export const mathCurrency = (billState , num) => {
    const currentBill = 73.21

    if(billState){
        const res = num * currentBill
        return res.toFixed(1)
    }else{
        return num
    }
}