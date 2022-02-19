import cls from '../../scss/components/elements/pagestitle.module.scss'

const PagesTitle = ({ text }) => {
    return <div className={cls.title}>{text}</div>
}

export { PagesTitle }