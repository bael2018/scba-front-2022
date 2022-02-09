import cls from '../../scss/nav.module.scss'
import { MasterLogo } from '../elements/ui/MasterLogo'
import { AiOutlineMan , AiOutlineWoman , AiFillHeart } from 'react-icons/ai'
import { BsCurrencyDollar, BsSearch } from 'react-icons/bs'
import { BiHomeSmile , BiRuble , BiBasket } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { VscAccount } from 'react-icons/vsc'
import { MdToys } from 'react-icons/md'
import { CustomLink } from '../elements/CustomLink'
import { changeCurrency, setSearchModal } from '../../store/slices/generalSlice'

const NavigationDefault = () => {
    const state = useSelector(state => state.general.currency)
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
                            <AiFillHeart/>
                            WISHLIST
                        </span>
                    </CustomLink>
                    <CustomLink styles='nav' to={'/cart'}>
                        <span>
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
                            state ? 
                            <>
                                <BiRuble/>
                                RUBLE
                            </> : 
                            <>
                                <BsCurrencyDollar/>
                                DOLLAR
                            </>
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