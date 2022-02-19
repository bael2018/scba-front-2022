import cls from '../../scss/components/partials/viewimage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setZoomImage } from '../../store/slices/productItemSlice'

const ViewImage = ({ image }) => {
    const show = useSelector(state => state.product_item.zoomImage)
    const dispatch = useDispatch()
    
    return (
        <section className={show ? `${cls.view} ${cls.view_active}` : cls.view}>
            <div className={cls.view_wrapper}>
                <div 
                    className={cls.view_wrapper_close}
                    onClick={() => dispatch(setZoomImage())}
                >   &times;
                </div>
                <img src={image} alt="inner" />
            </div>
        </section>  
    )
}

export { ViewImage }
