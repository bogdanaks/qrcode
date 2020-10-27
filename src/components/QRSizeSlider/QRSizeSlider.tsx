import React from 'react'

import styles from './styles.module.scss'

import qrSizeSvg from '../../assets/qrSizeSvg.svg'

interface QRSizeSliderProps {
    value: string
    setValue: (str: string) => void
}

export const QRSizeSlider: React.FC<QRSizeSliderProps> = ({ value, setValue }) => {
    const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.sliderBlock}>
            <div className={styles.sizeSlider}>
                <input
                    type="range"
                    min="200"
                    max="350"
                    value={value}
                    step="10"
                    onChange={(e) => handleChangeSize(e)}
                />
                <img src={qrSizeSvg} alt="borderSvg" />
            </div>
        </div>
    )
}
