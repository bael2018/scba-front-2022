import { MasterCarousel } from '../components/partials/carousel/MasterCarousel'
import { ArrivalList } from '../components/partials/homepage/ArrivalList'
import { FamousList } from '../components/partials/homepage/FamousList'

const HomePage = () => {
    return (
        <>
            <MasterCarousel/>
            <ArrivalList/>
            <FamousList/>
        </>
    )
}

export { HomePage }