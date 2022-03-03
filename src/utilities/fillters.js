import { toArrayWithId } from "./toArray"
import { toLower } from "."

export const fillterByid = (item , productId) => {
    return toArrayWithId(item).filter(({ id }) => {
        return id === productId
    })
}

export const filterProductItems = (arr , first , second) => {
    return arr.filter(({ category , subCategory }) => {
        return toLower(category) === first && toLower(subCategory) === toLower(second)
    })
}

export const productFilter = (price, array , setProducts) => {
    if(price === 'Recommended'){
        setProducts(array)
    }else if(price === 'Low to High'){
        setProducts(array.sort((a,b) => a.price - b.price))
    }else if(price === 'High to Low'){
        setProducts(array.sort((a,b) => b.price - a.price))
    }
}