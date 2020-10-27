import React from 'react'

import transparency from '../../assets/transparency.svg'

import styles from './styles.module.scss'
import { BorderSlider } from '../BorderSlider/BorderSlider'

interface ChooseSettingsProps {
    borderValue: string
    setBorderValue: (str: string) => void
    isShowText: boolean
    setIsShowText: (toggle: boolean) => void
    isShowBg: boolean
    setIsShowBg: (toggle: boolean) => void
}

export const ChooseSettings: React.FC<ChooseSettingsProps> = ({
    borderValue,
    setBorderValue,
    isShowText,
    setIsShowText,
    isShowBg,
    setIsShowBg,
}) => {
    const [showBorder, setShowBorder] = React.useState<boolean>(false)

    const handleShowBorderSet = () => {
        setShowBorder(!showBorder)
    }

    return (
        <div className={styles.chooseBlock}>
            <ul>
                <li>
                    <button className={styles.borderSet} onClick={handleShowBorderSet}></button>
                    <div
                        className={[
                            styles.activeLine,
                            Number(borderValue) > 0 && styles.showLine,
                        ].join(' ')}></div>
                </li>
                <li>
                    <button className={styles.transparency} onClick={() => setIsShowBg(!isShowBg)}>
                        <img src={transparency} alt="Transparency" />
                    </button>
                    <div
                        className={[styles.activeLine, isShowBg && styles.showLine].join(
                            ' ',
                        )}></div>
                </li>
                <li>
                    <button className={styles.btnText} onClick={() => setIsShowText(!isShowText)}>
                        <span>T</span>
                    </button>
                    <div
                        className={[styles.activeLine, isShowText && styles.showLine].join(
                            ' ',
                        )}></div>
                </li>
            </ul>
            {showBorder && <BorderSlider value={borderValue} setValue={setBorderValue} />}
        </div>
    )
}
