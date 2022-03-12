import cls from "../../../scss/components/skeletons/skeleton.module.scss";

const Skeleton = ({ styles }) => {
    const state = [];

    for (let i = 0; i < 8; i++) {
        state.push({ id: i });
    }

    return (
        <section
            className={`${cls.skeleton} ${
                styles === "category"
                    ? cls.skeleton_categoryActive
                    : styles === "product"
                    ? cls.skeleton_productActive
                    : styles === "cart"
                    ? cls.skeleton_cartActive
                    : ""
            }`}
        >
            {state.map(({ id }) => (
                <div key={id}></div>
            ))}
        </section>
    );
};

export { Skeleton };
