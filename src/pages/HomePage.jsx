
import { MasterCarousel } from '../components/partials/carousel/MasterCarousel'
import { ArrivalsList } from '../components/partials/homepage/ArrivalsList'
import { FamousList } from '../components/partials/homepage/FamousList'

const HomePage = () => {
    return (
        <>
            <MasterCarousel/>
            <ArrivalsList/>
            <FamousList/>
        </>
    )
}

export { HomePage }