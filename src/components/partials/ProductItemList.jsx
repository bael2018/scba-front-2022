import { useGetProductsQuery } from "../../store/rtk-query/productsApi"
import { filterProductItems } from "../../utilities/fillters"
import { toArrayWithId } from "../../utilities/toArray"
import { ProductItem } from '../elements/ProductItem'
import { useMemo ,useState } from "react"
import { useSelector } from "react-redux"
import { Empty } from "./Empty"
import { productFilter } from "../../utilities/productFilter"

const ProductItemList = ({ first , second }) => {
    const { data } = useGetProductsQuery()
    const { price , status } = useSelector(state => state.product_item)
    const productsData = filterProductItems(toArrayWithId(data) , first , second)
    const [products , setProducts] = useState(productsData)

    useMemo(() => {
        if(status === 'Recommended'){
            productFilter(price , productsData , setProducts)
        }else if(status === 'New'){
            const filteredArray = productsData.filter(({ status }) => status === 'New')
            productFilter(price , filteredArray , setProducts)
        }else if(status === 'Famous'){
            const filteredArray = productsData.filter(({ status }) => status === 'Famous')
            productFilter(price , filteredArray , setProducts)
        }
    } , [price , status])

    return (
        filterProductItems(toArrayWithId(data) , first , second).length ? 
        (   
            products.length ? (
                products.map(item => {
                    return (
                        <ProductItem 
                            key={item.id} 
                            product={item}
                            path={`/product/${first}/${second}/${item.title}`}
                        />
                    )
                }) 
            ) : <Empty text={status}/>
        ) : <Empty text={'Product'}/>
    )
}

export { ProductItemList }