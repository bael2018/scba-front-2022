import cls from '../../scss/components/elements/productPrice.module.scss'
import { AiOutlineDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { initPriceState } from '../../storage'
import { setActiveImage } from '../../utilities/activeKey'

const ProductPrice = () => {
    const priceType = useSelector(state => state.product.price)
    const [array , setArray] = useState(initPriceState)
    const [show , setShow] = useState(false)

    const setPrice = e => {
        setArray(prev => setActiveImage(prev , e))
    }

    return (
        <section 
            className={show ? `${cls.price} ${cls.price_active}` : cls.price}
            onClick={() => setShow(prev => !prev)}
        >
            <h4>Price <AiOutlineDown/></h4>
            
            <div className={show ? cls.price_wrapper_active : ''}>
                {
                    array.map(({ id , title , active }) => {
                        return <p
                            key={id}
                            onClick={() => setPrice(id)}
                        >
                        <span className={active ? cls.active_span : ''}></span>
                        {title}
                    </p>
                    })
                }
            </div>
        </section>
    )
}

export { ProductPrice }