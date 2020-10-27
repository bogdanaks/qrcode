import React from 'react'
import QRCode from 'qrcode.react'
import { RGBColor } from 'react-color'

import styles from './styles.module.scss'

import transparentImg from '../../assets/transparentBg.png'

import { SaveBlock } from '../SaveBlock/SaveBlock'

interface QRBlockProps {
    fgColor: RGBColor
    bgColor: 'transparent' | 'white'
    value: string
    borderSize: number
    radiusSize: number
    isShowText: boolean
    qrSize: string
}

export const QRBlock: React.FC<QRBlockProps> = ({
    fgColor,
    bgColor,
    value,
    borderSize,
    radiusSize,
    isShowText,
    qrSize,
}) => {
    const qrBlockRef = React.useRef<HTMLDivElement>(null)

    return (
        <div className={styles.qrWrapper}>
            <div className={styles.qrConatinerBlock}>
                {bgColor === 'transparent' && (
                    <div className={styles.transparentBg}>
                        <img src={transparentImg} alt="" />
                    </div>
                )}
                <div className={styles.qrConatiner} ref={qrBlockRef}>
                    {bgColor === 'white' && <div className={styles.whiteBg}></div>}
                    <div
                        className={styles.qrBlock}
                        style={{
                            borderColor: `rgba(${fgColor.r},${fgColor.g},${fgColor.b},${fgColor.a})`,
                            borderWidth: `${borderSize}px`,
                            borderStyle: 'solid',
                            borderRadius: `${radiusSize}%`,
                        }}>
                        <QRCode
                            value={value}
                            size={Number(qrSize)}
                            fgColor={`rgba(${fgColor.r},${fgColor.g},${fgColor.b},${fgColor.a})`}
                            bgColor={bgColor}
                            renderAs="svg"
                        />
                    </div>
                    {isShowText && (
                        <span
                            style={{
                                color: `rgba(${fgColor.r},${fgColor.g},${fgColor.b},${fgColor.a})`,
                            }}>
                            {value}
                        </span>
                    )}
                </div>
            </div>
            <SaveBlock qrBlockRef={qrBlockRef} />
        </div>
    )
}
