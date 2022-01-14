import cls from '../../../scss/components/skeletons/productSkeleton.module.scss'

const ProductSkeleton = ({ length }) => {
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

export { ProductSkeleton }