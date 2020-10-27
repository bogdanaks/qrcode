import React from 'react'

import styles from './styles.module.scss'

import borderSvg from '../../assets/borderSvg.svg'
import radiusSvg from '../../assets/radiusSvg.svg'

interface BorderSliderProps {
    value: string
    setValue: (str: string) => void
    radiusValue: string
    setRadiusValue: (str: string) => void
}

export const BorderSlider: React.FC<BorderSliderProps> = ({
    value,
    setValue,
    radiusValue,
    setRadiusValue,
}) => {
    const handleChangeBorder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleChangeRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadiusValue(e.target.value)
    }

    return (
        <div className={styles.sliderBlock}>
            <div className={styles.borderSlider}>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={value}
                    step="1"
                    onChange={(e) => handleChangeBorder(e)}
                />
                <img src={borderSvg} alt="borderSvg" />
            </div>
            <div className={styles.radiusSlider}>
                <input
                    type="range"
                    min="0"
                    max="50"
                    value={radiusValue}
                    step="1"
                    onChange={(e) => handleChangeRadius(e)}
                />
                <img src={radiusSvg} alt="radiusSvg" />
            </div>
        </div>
    )
}
