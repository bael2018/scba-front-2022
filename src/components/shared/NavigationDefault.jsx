import { changeCurrency, setSearchModal } from '../../store/slices/generalSlice'
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

const NavigationDefault = () => {
    const state = useSelector(state => state.general.currency)
    const { isAuth } = useSelector(state => state.auth)
    const { data } = useGetProductCartQuery()
    const { data: wishlistData } = useGetProductWishlistQuery()
    const dispatch = useDispatch()

    return (
        <section className={cls.nav}>
            <MasterLogo/>
            <div className={cls.nav_child}>
                <ul>
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
                                    <button className={cls.nav_child_cart}>{toArrayWithId(wishlistData).length}</button>
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
                                    <button className={cls.nav_child_cart}>{toArrayWithId(data).length}</button>
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