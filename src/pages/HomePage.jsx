import { MasterCarousel } from '../components/partials/carousel/MasterCarousel'
import { ArrivalList } from '../components/partials/homepage/ArrivalList'

const HomePage = () => {
    return (
        <>
            <MasterCarousel/>
            <ArrivalList
                activeText={'New'}
                title={'arrivals'}
                text={'see our best arrivals of this month !'}
            /> 
            <ArrivalList
                activeText={'Famous'}
                title={'items'}
                text={'see our famous items !'}
            />   
        </>
    )
}

export { HomePage }