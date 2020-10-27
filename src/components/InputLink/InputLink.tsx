import React from 'react'

import styles from './styles.module.scss'

interface InputLinkProps {
    value: string
    setValue: (str: string) => void
}

export const InputLink: React.FC<InputLinkProps> = ({ value, setValue }) => {
    return (
        <div className={styles.inputBlock}>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
