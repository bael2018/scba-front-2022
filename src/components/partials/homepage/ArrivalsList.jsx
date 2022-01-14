
import cls from '../../../scss/components/arrivalList.module.scss'
import { ArrivalItem } from '../../elements/ArrivalItem'

const ArrivalsList = () => {
    return (
        <section className={cls.arrival}>
            <div className={cls.arrival_title}>
                <h2><span>New</span> arrivals</h2>
                <p>see our best arrivals of this month !</p>
            </div>
            <div className={cls.arrival_body}>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
                <ArrivalItem/>
            </div>
        </section>
    )
}

export { ArrivalsList }