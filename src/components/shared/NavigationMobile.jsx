import { AiFillHeart, AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'
import { BiBasket, BiHomeSmile } from 'react-icons/bi'
import { MdToys } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import cls from '../../scss/components/mobilenav.module.scss'
import { useGetProductCartQuery } from '../../store/rtk-query/productCartApi'
import { useGetProductWishlistQuery } from '../../store/rtk-query/productWishlist'
import { setBurgerMenu } from '../../store/slices/generalSlice'
import { toArrayWithId } from '../../utilities/toArray'
import { CustomLink } from '../elements/CustomLink'

const NavigationMobile = () => {
    const { isBurgerMenu } = useSelector(state => state.general)
    const { data: wishlistData } = useGetProductWishlistQuery()
    const { isAuth } = useSelector(state => state.auth)
    const { data } = useGetProductCartQuery()
    const dispatch = useDispatch()

    const burgerHandler = () => {
        dispatch(setBurgerMenu())
    }
    
    return (
        <div className={`${cls.nav} ${isBurgerMenu && cls.nav_active}`}>
            <div className={cls.nav_wrapper}>
                <ul onClick={burgerHandler}>
                    <CustomLink styles='nav' to={'/'}>
                        <span>
                            <BiHomeSmile/>
                            HOME
                        </span>
                    </CustomLink>
                    <CustomLink styles='nav' to={'/product/woman'}>
                        <span>
                            <AiOutlineWoman/>
                            WOMAN
                        </span>
                    </CustomLink>
                    <CustomLink styles='nav' to={'/product/man'}>
                        <span>
                            <AiOutlineMan/>
                            MAN
                        </span>
                    </CustomLink>
                    <CustomLink styles='nav' to={'/product/kid'}>
                        <span>
                            <MdToys/>
                            KID
                        </span>
                    </CustomLink>
                    <CustomLink styles='nav' to={'/wishlist'}>
                        <span>
                            {
                                isAuth && (
                                    toArrayWithId(wishlistData).length !== 0 && 
                                    <button className={cls.nav_counter}>
                                        {toArrayWithId(wishlistData).length}
                                    </button>
                                )
                            }
                            <AiFillHeart/>
                            WISHLIST
                        </span>
                    </CustomLink>
                    <CustomLink styles='nav' to={'/cart'}>
                        <span>
                            {
                                isAuth && (
                                    toArrayWithId(data).length !== 0 && 
                                    <button className={cls.nav_counter}>
                                        {toArrayWithId(data).length}
                                    </button>
                                )
                            }
                            <BiBasket/>
                            CART
                        </span>
                    </CustomLink>
                    <CustomLink styles='nav' to={'/user'}>
                        <span>
                            <VscAccount/>
                            ACCOUNT
                        </span>
                    </CustomLink>
                </ul>
            </div>
        </div>
    )
}

export { NavigationMobile }