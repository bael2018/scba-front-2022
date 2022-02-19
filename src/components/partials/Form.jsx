import { useState } from "react"
import cls from '../../scss/components/partials/form.module.scss';

const Form = ({ btnTitle , handleClick }) => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    return (
        <div className={cls.form}>
            <div>
                <input 
                    type="text" 
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Email</label>
            </div>
            <div>
                <input 
                    type="password" 
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label>Password</label>
            </div>
            <button onClick={() => handleClick(email , password)}>{btnTitle}</button>
        </div>
    )
}

export { Form }