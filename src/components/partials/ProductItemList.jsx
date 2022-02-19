import { useGetProductsQuery } from "../../store/rtk-query/productsApi"
import { toArrayWithId } from "../../utilities/toArray"
import { ProductItem } from '../elements/ProductItem'
import { toLower } from "../../utilities/toLowerCase"
import { Empty } from "./Empty"

const ProductItemList = ({ first , second }) => {
    const { data } = useGetProductsQuery()

    return (
        toArrayWithId(data).length ? (
            toArrayWithId(data)
            .filter(({ category , subCategory }) => {
                return toLower(category) === first && toLower(subCategory) === toLower(second)
            })
            .map(item => {
                return (
                    <ProductItem 
                        key={item.id} 
                        product={item}
                        path={`/product/${first}/${first}-${toLower(second)}/${first}-${toLower(second)}-`}
                    />
                )
            }) 
        ) : <Empty text={'Products'}/>
    )
}

export { ProductItemList }