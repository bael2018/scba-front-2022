import { useSelector } from 'react-redux'
import cls from '../../scss/search.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setSearchModal } from '../../store/slices/generalSlice'
import { useState , useEffect } from 'react'
import { BsSearch } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { SearchItem } from '../elements/SearchItem'
import { setModal } from '../../store/slices/modalSlice'
import { rootPath } from '../../utilities/paths'

const initState = [
    {
        id: new Date().toISOString(),
        title: "Men's Wool Jackets & Coats | Pendleton",
        discountPrice: 400,
        price: 450,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51081-16049?_s=RAABAB0'
    },
    {
        id: new Date().toISOString(),
        title: "The Fall Jacket for woman 2021",
        discountPrice: 490,
        price: 670,
        image: 'https://media1.popsugar-assets.com/files/thumbor/pSvbUzMweeQdf29IoB7YUEzep7Y/0x0:1920x1920/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/09/21/791/n/1922564/a484c27f614a1d838562f4.74697070_/i/best-fall-jackets-for-women.webp'
    },
    {
        id: new Date().toISOString(),
        title: "Jacket with Brown Colors",
        discountPrice: 80,
        price: 111,
        image: 'https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87020506_CG.jpg?ts=1633611428250&imwidth=388&imdensity=2'
    },
    {
        id: new Date().toISOString(),
        title: "Jacket Woman Lucky Brand",
        discountPrice: 200,
        price: 233,
        image: 'https://i1.adis.ws/i/lucky/7W31485_610_2/HOODED-PUFFER-JACKET-610?$medium-2$'
    },
]

const Search = () => {
    const modal = useSelector(state => state.general.search)
    const [values , setValues] = useState('')
    const [data , setData] = useState([])
    const dispatch = useDispatch()

    const handleSearch = () => {
        if(values.trim().length){
            const filteredArray = initState.filter(item => item.title.toLowerCase().includes(values.toLowerCase()))
            setData(filteredArray)
            setValues('')
        }else{
            dispatch(setModal({
                state: rootPath.danger,
                title: 'Fill in input !',
                description: 'enter something inside'
            }))
        }
    }

    return (
        <section className={modal ? `${cls.search} ${cls.search_active}` : cls.search}>
            <span 
                className={cls.search_closer}
                onClick={() => dispatch(setSearchModal())}
            >
                <AiOutlineClose/>
            </span>
            <div className={cls.search_wrapper}>
                <div className={cls.search_wrapper_header}>
                    <input 
                        type="text"
                        value={values}
                        onChange={e => setValues(e.target.value)}
                        placeholder='Search...'
                    />
                    <span className={values && cls.activeTimes} onClick={() => setValues('')}><FaTimes/></span>
                    <button onClick={handleSearch}><BsSearch/></button>
                </div>

                <div className={cls.search_wrapper_body}>
                    {
                        data.map(item => <SearchItem key={item.id} {...item}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export { Search }
