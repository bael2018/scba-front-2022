import { toArrayWithId } from "./toArray"

export const fillterByid = (item , productId) => {
    return toArrayWithId(item).filter(({ id }) => {
        return id === productId
    })
}