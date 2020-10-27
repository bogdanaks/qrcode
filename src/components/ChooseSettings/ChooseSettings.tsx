import React from 'react'

import transparency from '../../assets/transparency.svg'
import qrImg from '../../assets/qrImg.png'

import styles from './styles.module.scss'
import { BorderSlider } from '../BorderSlider/BorderSlider'
import { QRSizeSlider } from '../QRSizeSlider/QRSizeSlider'

interface ChooseSettingsProps {
    qrSizeValue: string
    setQrSizeValue: (str: string) => void
    borderValue: string
    setBorderValue: (str: string) => void
    radiusValue: string
    setRadiusValue: (str: string) => void
    isShowText: boolean
    setIsShowText: (toggle: boolean) => void
    isShowBg: boolean
    setIsShowBg: (toggle: boolean) => void
}

export const ChooseSettings: React.FC<ChooseSettingsProps> = ({
    qrSizeValue,
    setQrSizeValue,
    borderValue,
    setBorderValue,
    radiusValue,
    setRadiusValue,
    isShowText,
    setIsShowText,
    isShowBg,
    setIsShowBg,
}) => {
    const [showBorder, setShowBorder] = React.useState<boolean>(false)
    const [showQRSize, setQRSize] = React.useState<boolean>(false)

    const handleShowBorderPopUp = () => {
        if (showQRSize) {
            setQRSize(false)
        }
        setShowBorder(!showBorder)
    }

    const handleShowQRSizePopUp = () => {
        if (showBorder) {
            setShowBorder(false)
        }
        setQRSize(!showQRSize)
    }

    return (
        <div className={styles.chooseBlock}>
            <ul>
                <li>
                    <button className={styles.borderSet} onClick={handleShowBorderPopUp}></button>
                    <div
                        className={[
                            styles.activeLine,
                            Number(borderValue) > 0 && styles.showLine,
                        ].join(' ')}></div>
                </li>
                <li>
                    <button className={styles.qr} onClick={handleShowQRSizePopUp}>
                        <img src={qrImg} alt="QRImg" />
                    </button>
                    <div
                        className={[styles.activeLine, showQRSize && styles.showLine].join(
                            ' ',
                        )}></div>
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
            {showBorder && (
                <BorderSlider
                    value={borderValue}
                    setValue={setBorderValue}
                    radiusValue={radiusValue}
                    setRadiusValue={setRadiusValue}
                />
            )}
            {showQRSize && <QRSizeSlider value={qrSizeValue} setValue={setQrSizeValue} />}
        </div>
    )
}
