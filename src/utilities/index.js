export const toLower = (str) => {
    return str.toLowerCase();
};

export const mathCurrency = (billState, num) => {
    const currentBill = 84;

    if (billState) {
        const res = num / currentBill;
        return res.toFixed(1);
    } else {
        return num;
    }
};
