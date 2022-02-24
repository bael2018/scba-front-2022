export const productFilter = (price, array , setProducts) => {
    if(price === 'Recommended'){
        setProducts(array)
    }else if(price === 'Low to High'){
        setProducts(array.sort((a,b) => a.price - b.price))
    }else if(price === 'High to Low'){
        setProducts(array.sort((a,b) => b.price - a.price))
    }
}