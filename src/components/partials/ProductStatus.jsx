import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { initStatusState } from '../../constants/init'
import cls from '../../scss/components/elements/productstatus.module.scss'
import { setStatus } from '../../store/slices/productItemSlice'
import { setActiveColour } from '../../utilities/activeKey'

const ProductStatus = () => {
    const { status } = useSelector(state => state.product_item)
    const [array , setArray] = useState(initStatusState)
    const [show , setShow] = useState(false)
    const dispatch = useDispatch()

    const setColour = (e , title) => {
        setArray(prev => setActiveColour(prev , e))
        dispatch(setStatus(title))
    }

    return (
        <section 
            className={show ? `${cls.price} ${cls.price_active}` : cls.price}
            onClick={() => setShow(prev => !prev)}
        >
            <h4>Status <AiOutlineDown/></h4>
            
            <div className={` ${show && cls.price_wrapper_active}`}>
                {
                    array.map(({ id , title , active }) => {
                        return (
                            <p
                                key={id}
                                onClick={() => setColour(id , title)}
                            >
                            <span className={` ${title === status && cls.active_span}`}></span>
                            {title}
                            </p>
                        )
                    })
                }
            </div>
        </section>
    )
}

export { ProductStatus }