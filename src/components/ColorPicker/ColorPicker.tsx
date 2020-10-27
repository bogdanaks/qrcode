import React from 'react'
import { ChromePicker, ColorResult, RGBColor } from 'react-color'

import colorPic from '../../assets/color_pic.svg'

import styles from './styles.module.scss'

interface IColor {
    hex: string
    rgba: RGBColor
}

interface ColorPickerProps {
    color: IColor
    setColor: ({ hex: string, rgba: RGBColor }: IColor) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
    const [showChromePicker, setShowChromePicker] = React.useState<boolean>(false)

    const handleShowChrome = () => {
        setShowChromePicker(!showChromePicker)
    }

    const handleChangeColor = (color: ColorResult) => {
        setColor({ hex: color.hex, rgba: color.rgb })
    }
    const handleChangeCircleColor = (rgba: { r: number; g: number; b: number; a: number }) => {
        setColor({ hex: '#fff', rgba })
    }

    const popover: React.CSSProperties = {
        cursor: 'pointer',
        width: '250px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px 0',
    }
    return (
        <div style={popover}>
            <div className={styles.circles}>
                <div
                    className={styles.circle}
                    style={{ backgroundColor: 'rgb(29, 45, 54)' }}
                    onClick={() => handleChangeCircleColor({ r: 29, g: 45, b: 54, a: 1 })}></div>
                <div
                    className={styles.circle}
                    style={{ backgroundColor: 'rgb(82, 38, 125)' }}
                    onClick={() => handleChangeCircleColor({ r: 82, g: 38, b: 125, a: 1 })}></div>
                <div
                    className={styles.circle}
                    style={{ backgroundColor: 'rgb(61, 179, 113)' }}
                    onClick={() => handleChangeCircleColor({ r: 61, g: 179, b: 113, a: 1 })}></div>
                <div
                    className={styles.circle}
                    style={{ backgroundColor: 'rgb(59, 89, 152)' }}
                    onClick={() => handleChangeCircleColor({ r: 59, g: 89, b: 152, a: 1 })}></div>
                <div className={styles.circlePalitra} onClick={handleShowChrome}>
                    <img src={colorPic} alt="Color Picker" />
                </div>
            </div>
            {showChromePicker && (
                <ChromePicker
                    color={color.rgba}
                    onChange={(color) => handleChangeColor(color)}
                    disableAlpha={false}
                />
            )}
        </div>
    )
}
