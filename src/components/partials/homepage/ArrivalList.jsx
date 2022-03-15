import cls from "../../../scss/components/partials/arrivallist.module.scss";
import { useGetProductsQuery } from "../../../store/query/productsApi";
import { toArrayWithId } from "../../../utilities/toArray";
import { ArrivalItem } from "../../elements/ArrivalItem";
import { Skeleton } from "../../elements/skeletons/Skeleton";
import { Empty } from "../Empty";

const ArrivalList = ({ activeText, title, text }) => {
    const { data, isLoading } = useGetProductsQuery();

    return (
        <section className={cls.arrival}>
            <div className={cls.arrival_title}>
                <h2>
                    <span>{activeText}</span> {title}
                </h2>
                <p>{text}</p>
            </div>
            <div className={cls.arrival_body}>
                {isLoading ? (
                    <Skeleton styles={"product"} />
                ) : toArrayWithId(data).filter(
                      ({ status: stat }) => stat === activeText
                  ).length ? (
                    toArrayWithId(data)
                        .filter(({ status: stat }) => stat === activeText)
                        .map((item) => <ArrivalItem key={item.id} {...item} />)
                ) : (
                    <Empty text={activeText} />
                )}
            </div>
        </section>
    );
};

export { ArrivalList };
