import cls from '../../../scss/components/skeletons/categorySkeleton.module.scss'

const CategorySkeleton = ({ length }) => {
    const state = []
    
    for(let i = 0; i < length; i++){
        state.push({ id: i })
    }

    return (
        <section className={cls.skeleton}>
            {
                state.map(({ id }) => <div key={id}></div>)
            }
        </section>
    )
}

export { CategorySkeleton }