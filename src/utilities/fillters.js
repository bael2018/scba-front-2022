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