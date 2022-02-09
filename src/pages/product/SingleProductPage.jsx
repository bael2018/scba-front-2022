import { useParams } from "react-router-dom"
import cls from '../../scss/page/SingleProductPage.module.scss'
import { useState , useMemo } from "react"
import { setActiveImage } from "../../utilities/activeKey"
import { ViewImage } from "../../components/partials/ViewImage"
import { useDispatch } from "react-redux"
import { AiOutlineHeart } from "react-icons/ai"
import { Currency } from '../../components/elements/Currency'
import { breadCrumbPath } from "../../utilities/bread"
import { setZoomImage } from "../../store/slices/productItemSlice"
import { BreadCrumb } from "../../components/partials/BreadCrumb"

const pics = [
    {
        pic: 'https://img.ltwebstatic.com/images3_pi/2020/10/26/1603676271e2d73b106daf163e154aa09e885e5f41.webp',
        id: 1,
        active: true
    },
    {
        pic: 'https://media.missguided.com/i/missguided/G1807719_02?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$',
        id: 2,
        active: false
    },
    {
        pic: 'https://img.ltwebstatic.com/images3_pi/2020/03/25/158512465436e762f16d967d6800debd80f8b1e30c.webp',
        id: 3,
        active: false
    }
]

const SingleProductPage = () => {
    const { product } = useParams()
    const { first , second , third } = breadCrumbPath(product)
    const [picsArray , setPicsArray] = useState(pics)
    const [image , setImage] = useState('')
    const dispatch = useDispatch()

    const breadCrumb = [
        {
            title: 'Home',
            path: '/',
            id: 1
        },
        {
            title: first,
            path: `/product/${first}`,
            id: 2
        },
        {
            title: second,
            path: `/product/${first}/${first}-${second}`,
            id: 3
        },
        {
            title: third,
            active: true,
            path: `/product/${first}/${first}-${second}/${first}-${second}-${third}`,
            id: 4
        }
    ]

    useMemo(() => {
        setImage(pics[0].pic)
    } , [])

    const activeImage = (id , pic) => {
        setImage(pic)
        setPicsArray(prev => setActiveImage(prev , id))
    }

    return (
        <> 
            <BreadCrumb paths={breadCrumb}/>
            <div className={cls.single}>
                <div className={cls.single_pics}>
                    {
                        picsArray.map(({pic , id , active}) => {
                            return <img 
                                className={` ${active && cls.single_pics_active}`}
                                onClick={() => activeImage(id , pic)}
                                key={id}
                                src={pic} 
                                alt="inner" 
                            />
                        })
                    }
                </div>
                <div 
                    className={cls.single_image}
                    onClick={() => dispatch(setZoomImage())}
                >
                    <img src={image} alt="inner" />
                </div>
                <div className={cls.single_body}>
                    <h3>{third}</h3>
                    <p>Product code: 3546724</p>

                    <Currency price={17} discountPrice={15}/>

                    <div className={cls.single_body_color}>
                        <span>COLOUR :</span> BLACK
                        <div className={cls.single_body_color_wrapper}>
                            <div></div>
                        </div>
                    </div>

                    <div className={cls.single_body_size}>
                        <span>SIZE :</span> XL
                        <div className={cls.single_body_size_wrapper}>
                            <div>XL</div>
                            <div>XXL</div>
                            <div>L</div>
                        </div>
                    </div>

                    <div className={cls.single_body_lower}>
                        <input type="text" />
                        <button>ADD TO CART</button>
                        <span>
                            <AiOutlineHeart/>
                        </span>
                    </div>
                </div>
            </div>
            <ViewImage array={picsArray}/>
        </>
    )
}

export { SingleProductPage }
