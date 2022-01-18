import { useSelector } from 'react-redux'
import cls from '../../scss/search.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setSearchModal } from '../../store/slices/generalSlice'
import { useState } from 'react'

const Search = () => {
    const modal = useSelector(state => state.general.search)
    const [value , setValue] = useState('')
    const dispatch = useDispatch()

    return (
        <section className={modal ? `${cls.search} ${cls.search_active}` : cls.search}>
            <div className={cls.search_wrapper}>
                <span 
                    className={cls.search_wrapper_closer}
                    onClick={() => dispatch(setSearchModal())}
                >
                    <AiOutlineClose/>
                </span>

                <div className={cls.search_wrapper_header}>
                    <input 
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Search...'
                    />
                    <button>FIND</button>
                </div>
            </div>
        </section>
    )
}

export { Search }
