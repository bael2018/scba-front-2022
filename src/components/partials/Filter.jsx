import cls from '../../scss/partials/filter.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ProductPrice } from '../elements/ProductPrice'
import { ProductColour } from '../elements/ProductColour'
import { setProductViewLarge, setProductViewSmoll } from '../../store/slices/productItemSlice'

const Filter = () => {
    const view = useSelector(state => state.product_item.view)
    const dispatch = useDispatch()

    return (
        <section className={cls.filter}>
            <div className={cls.filter_wrapper}>
                <h3>Sort by</h3>
                <ProductPrice/>
                <ProductColour/>
            </div>
            <div className={cls.filter_view}>
                <div 
                    className={view ? `${cls.filter_view_first} ${cls.filter_view_active}` : cls.filter_view_first}
                    onClick={() => dispatch(setProductViewSmoll())}
                >
                    <span></span><span></span><span></span>
                </div>
                <div 
                    className={!view ? `${cls.filter_view_second} ${cls.filter_view_active}` : cls.filter_view_second}
                    onClick={() => dispatch(setProductViewLarge())}
                >
                    <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>
        </section>
    )
}

export { Filter }