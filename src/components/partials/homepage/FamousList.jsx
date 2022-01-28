import { FamousItem } from "../../elements/FamousItem"
import cls from '../../../scss/components/famousList.module.scss'

const FamousList = () => {

    const initState = [
        {
            title: 'Blue suit',
            image: 'https://image.made-in-china.com/202f0j10mZtaiWPfgNrV/Fashion-Design-Man-Business-Suits-Italian-Man-Suits.jpg',
            id: 1
        },
        {
            title: 'Dark suit',
            image: 'https://image.made-in-china.com/202f0j10osLQHqbaaBul/Formal-Blazer-Latest-Design-Coat-Pant-Men-Suit.jpg',
            id: 2
        },
        {
            title: 'Grey suit',
            image: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/7741/70731/Sale-Brand-Mens-Suit-Jacket-Formal-Business-Blazer-Men-Groom-Three-Pieces-Slim-Fit-Party-Clothing__26340.1527764050.jpg?c=2?imbypass=on',
            id: 3
        },   {
            title: 'Blue suit',
            image: 'https://image.made-in-china.com/202f0j10mZtaiWPfgNrV/Fashion-Design-Man-Business-Suits-Italian-Man-Suits.jpg',
            id: 4
        },
        {
            title: 'Dark suit',
            image: 'https://image.made-in-china.com/202f0j10osLQHqbaaBul/Formal-Blazer-Latest-Design-Coat-Pant-Men-Suit.jpg',
            id: 5
        },
    ]

    return (
        <section className={cls.famous}>
            <FamousItem title={'Jacket'} array={initState}/>
            <FamousItem title={'Suits'} array={initState}/>
            <FamousItem title={'Pants'} array={initState}/>
            <FamousItem title={'Shoes'} array={initState}/>
            <FamousItem title={'Caps'} array={initState}/>
            <FamousItem title={'Suits'} array={initState}/>
        </section>
    )
}

export { FamousList }