
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { rootContant } from '../../constants';
import cls from '../../scss/partials/modal.module.scss';
import { clearModal } from '../../store/slices/modalSlice';

const Modal = () => {
    const { display , state , description , title } = useSelector(state => state.modal)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearModal())
        }, 5000);   
    } , [display])

    return (
        <div 
            className={ display ? `${cls.modal} ${cls.modal_active}` : cls.modal }
            style={{
                border: 
                state === rootContant.success ? '3px solid #00e000' : 
                state === rootContant.danger ? '3px solid red' : 
                state === rootContant.warning ? '3px solid brown' : ''
            }}
        >   
            <h3>
                {title}
            </h3>
            {description}
        </div>
    )
}

export { Modal }