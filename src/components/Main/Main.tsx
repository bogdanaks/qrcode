import React from 'react'
import { RGBColor } from 'react-color'

import styles from './styles.module.scss'

import { ColorPicker } from '../ColorPicker/ColorPicker'
import { QRBlock } from '../QRBlock/QRBlock'
import { InputLink } from '../InputLink/InputLink'
import { ChooseSettings } from '../ChooseSettings/ChooseSettings'

export const Main: React.FC = () => {
    const [color, setColor] = React.useState<{ hex: string; rgba: RGBColor }>({
        hex: '#fff',
        rgba: { r: 51, g: 51, b: 51, a: 1 },
    })
    const [inputValue, setInputValue] = React.useState<string>('vk.com')
    const [qrSizeValue, setQrSizeValue] = React.useState<string>('200')
    const [borderValue, setBorderValue] = React.useState<string>('2')
    const [radiusValue, setRadiusValue] = React.useState<string>('2')
    const [isShowBg, setIsShowBg] = React.useState<boolean>(false)
    const [isShowText, setIsShowText] = React.useState<boolean>(false)

    return (
        <div className={styles.main}>
            <h2>Just QR Code</h2>
            <div className={styles.container}>
                <QRBlock
                    fgColor={color.rgba}
                    bgColor={isShowBg ? 'transparent' : 'white'}
                    value={inputValue}
                    borderSize={Number(borderValue)}
                    radiusSize={Number(radiusValue)}
                    isShowText={isShowText}
                    qrSize={qrSizeValue}
                />
                <div className={styles.settingsBlock}>
                    <InputLink value={inputValue} setValue={setInputValue} />
                    <ColorPicker color={color} setColor={setColor} />
                    <ChooseSettings
                        qrSizeValue={qrSizeValue}
                        setQrSizeValue={setQrSizeValue}
                        borderValue={borderValue}
                        setBorderValue={setBorderValue}
                        radiusValue={radiusValue}
                        setRadiusValue={setRadiusValue}
                        isShowText={isShowText}
                        setIsShowText={setIsShowText}
                        isShowBg={isShowBg}
                        setIsShowBg={setIsShowBg}
                    />
                </div>
            </div>
        </div>
    )
}
