import { useGetProductsQuery } from '../../store/rtk-query/productsApi'
import { useSelector } from 'react-redux'
import cls from '../../scss/components/search.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setSearchModal } from '../../store/slices/generalSlice'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { SearchItem } from '../elements/SearchItem'
import { setModal } from '../../store/slices/modalSlice'
import { rootContant } from '../../constants'
import { toArrayWithId } from '../../utilities/toArray'
import { BiErrorCircle } from 'react-icons/bi'

const Search = () => {
    const modal = useSelector(state => state.general.search)
    const { data } = useGetProductsQuery()
    const [values , setValues] = useState('')
    const [base , setBase] = useState([])
    const [text , setText] = useState(false)
    const dispatch = useDispatch()

    const handleSearch = () => {
        setText(true)
        if(values.trim().length){
            const filteredArray = toArrayWithId(data)
            .filter(item => item.title.toLowerCase().includes(values.toLowerCase()))
            setBase(filteredArray)
            setValues('')
        }else{
            dispatch(setModal({
                state: rootContant.danger,
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
                        !text && 
                        <div className={cls.search_wrapper_body_search}> 
                            <BsSearch/> Find your clothes !
                        </div>
                    }
                    {
                        
                        base.length ? base.map(item => <SearchItem key={item.id} {...item}/>) : 
                        text ? 
                        <div className={cls.search_wrapper_body_search}> 
                        <BiErrorCircle/> No products found ! 
                        </div> : 
                        null
                    }
                </div>
            </div>
        </section>
    )
}

export { Search }
