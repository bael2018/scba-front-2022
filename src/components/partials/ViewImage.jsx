import cls from '../../scss/partials/viewImage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState , useMemo } from 'react'
import { rootActionCreator } from '../../store/action-creators'

const ViewImage = ({ array }) => {
    const show = useSelector(state => state.product.zoomImage)
    const [base , setBase] = useState(array)
    const dispatch = useDispatch()

    const { pic } = base.find(({ active }) => active === true)

    useMemo(() => {
        setBase(array)
    } , [array])

    return (
        <section className={show ? `${cls.view} ${cls.view_active}` : cls.view}>
            <div className={cls.view_wrapper}>
                <div 
                    className={cls.view_wrapper_close}
                    onClick={() => dispatch(rootActionCreator.zoomImageAction())}
                >   &times;
                </div>
                <img src={pic} alt="inner" />
            </div>
        </section>  
    )
}

export { ViewImage }
