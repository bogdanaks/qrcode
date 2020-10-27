import React from 'react'
import { RGBColor } from 'react-color'

import styles from './styles.module.scss'

import { ColorPicker } from '../ColorPicker/ColorPicker'

export const Main: React.FC = () => {
    const [color, setColor] = React.useState<{ hex: string; rgb: RGBColor }>({
        hex: '#fff',
        rgb: { r: 51, g: 51, b: 51 },
    })
    return (
        <div className={styles.main}>
            <h2>Just QR Code</h2>
            <div
                className={styles.colorBlock}
                style={{
                    backgroundColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
                }}></div>
            <ColorPicker color={color} setColor={setColor} />
        </div>
    )
}
