import { changeCurrency, setBurgerMenu, setSearchModal } from '../../store/slices/generalSlice'
import { AiOutlineMan , AiOutlineWoman , AiFillHeart } from 'react-icons/ai'
import cls from '../../scss/components/nav.module.scss'
import { MasterLogo } from '../elements/ui/MasterLogo'
import { BsSearch } from 'react-icons/bs'
import { BiHomeSmile , BiBasket } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { VscAccount } from 'react-icons/vsc'
import { MdToys } from 'react-icons/md'
import { CustomLink } from '../elements/CustomLink'
import { currencyIcon } from '../../utilities/currencyIcon'
import { useGetProductCartQuery } from '../../store/rtk-query/productCartApi'
import { toArrayWithId } from '../../utilities/toArray'
import { useGetProductWishlistQuery } from '../../store/rtk-query/productWishlist'
import { HiMenuAlt2 } from 'react-icons/hi'

const NavigationDefault = () => {
    const state = useSelector(state => state.general.currency)
    const { isAuth } = useSelector(state => state.auth)
    const { data } = useGetProductCartQuery()
    const { data: wishlistData } = useGetProductWishlistQuery()
    const dispatch = useDispatch()

    const burgerHandler = () => {
        dispatch(setBurgerMenu())
    }

    return (
        <section className={cls.nav}>
            <div className={cls.nav_head}>
                <div className={cls.nav_burger} onClick={burgerHandler}>
                    <HiMenuAlt2/>
                </div>
                <MasterLogo/>
            </div>
            <div className={cls.nav_child}>
                <ul>
                    <div>
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
                                        <button className={cls.nav_child_counter}>
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
                                        <button className={cls.nav_child_counter}>
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
                    </div>
                    <span 
                        onClick={() => dispatch(changeCurrency())}
                        className={cls.nav_child_right_money}
                    >
                        {
                            currencyIcon(state , 'RUBLE' , 'DOLLAR')
                        }
                    </span>
                    <span 
                        onClick={() => dispatch(setSearchModal())}
                        className={cls.nav_child_right_search}
                    >
                        <BsSearch/> 
                    </span>
                </ul>
            </div>
        </section>
    )
}   

export { NavigationDefault }