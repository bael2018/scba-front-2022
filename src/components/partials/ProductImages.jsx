import cls from '../../scss/components/partials/productimages.module.scss'

const ProductImages = ({ images , active , setActive }) => {
    return (
        <div className={cls.pics}>
            {
                images.filter(Boolean).map((item , index) => {
                    return (
                        <img 
                            className={` ${active === item && cls.pics_active}`}
                            onClick={() => setActive(item)}
                            key={index}
                            src={item} 
                            alt="productImage" 
                        />
                    )
                })
            }
        </div>
    )
}

export { ProductImages }