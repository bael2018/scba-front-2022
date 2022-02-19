import cls from '../../scss/components/elements/searchitem.module.scss';
import { Currency } from './Currency';

const SearchItem = ({ title , price , discountPrice , image }) => {
    return (
        <div className={cls.search}>
            <div className={cls.search_image}>
                <img src={image} alt="product" />
            </div>
            <div className={cls.search_body}>
                <p>{title}</p>
                <Currency discountPrice={discountPrice} price={price}/>
            </div>
        </div>
    )
}

export { SearchItem }