import cls from '../../scss/components/elements/arrivalitem.module.scss'
import { Currency } from './Currency'

const ArrivalItem = ({ }) => {
    return (
        <section className={cls.arrivalItem}>
            <div className={cls.arrivalItem_image}>
                <div className={cls.arrivalItem_image_cover}/>
                <div className={cls.arrivalItem_image_picture}>
                    <img src="https://ae01.alicdn.com/kf/HTB1NlMhRpXXXXagXFXXq6xXFXXXU/Good-grammar-is-sexy-tshirt-womens-graphic-tee-tumblr-shirt-with-quotes-hipster-mens-funny-tshirts.jpg_Q90.jpg_.webp" alt="" />
                </div>
            </div>
            <div className={cls.arrivalItem_body}>
                <h5>Jackets</h5>
                <Currency discountPrice={40} price={45}/>
                <p>Dark-grey jacket</p>
            </div>
        </section>
    )
}

export { ArrivalItem }