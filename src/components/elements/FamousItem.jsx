import cls from '../../scss/components/elements/famousItem.module.scss'
import { useState } from "react"
import { useEffect } from 'react'

const FamousItem = ({ title , array }) => {
    const [image , setImage] = useState('')
    const [pid , setPid] = useState('')

    useEffect(() => {
        const initImage = array[0].image
        const initId = array[0].id
        setImage(initImage)
        setPid(initId)
    } , [])

    const findImage = item => {
        const findImage = array.find(({ id }) => id === item)
        setPid(item)
        setImage(findImage.image)
    }

    return (
        <section className={cls.famousItem}>
            <h2 className={cls.famousItem_title}>{title}</h2>
            <div className={cls.famousItem_body}>
                <ul>
                    {
                        array.map(({ title , id }) => {
                            return <li 
                                style={{background: pid === id ? 'yellow' : ''}}
                                onMouseOver={() => findImage(id)} key={id}
                            >
                                {
                                    pid === id ? <span style={{
                                        color: '#292929'
                                    }}>{title}</span> : title
                                }
                            </li>
                        })
                    }
                </ul>
                <img className={pid} src={image} alt="noImage" />
            </div>
        </section>
    )
}

export { FamousItem }