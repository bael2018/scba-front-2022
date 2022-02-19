import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { initColourState } from '../../constants/init'
import cls from '../../scss/components/elements/productcolour.module.scss'
import { setActiveColour } from '../../utilities/activeKey'

const ProductColour = () => {
    const priceType = useSelector(state => state.product_item.price)
    const [array , setArray] = useState(initColourState)
    const [show , setShow] = useState(false)

    const setColour = e => {
        setArray(prev => setActiveColour(prev , e))
    }

    return (
        <section 
            className={show ? `${cls.price} ${cls.price_active}` : cls.price}
            onClick={() => setShow(prev => !prev)}
        >
            <h4>Colour <AiOutlineDown/></h4>
            
            <div className={` ${show && cls.price_wrapper_active}`}>
                {
                    array.map(({ id , title , active }) => {
                        return (
                            <p
                                key={id}
                                onClick={() => setColour(id)}
                            >
                            <span className={` ${active && cls.active_span}`}></span>
                            {title}
                            </p>
                        )
                    })
                }
            </div>
        </section>
    )
}

export { ProductColour }