import React from 'react'
import { ChromePicker, ColorResult, RGBColor } from 'react-color'

interface IColor {
    hex: string
    rgb: RGBColor
}

interface ColorPickerProps {
    color: IColor
    setColor: ({}: any) => any
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
    const handleChangeColor = (color: ColorResult) => {
        setColor({ hex: color.hex, rgb: color.rgb })
    }

    const popover: React.CSSProperties = {
        cursor: 'pointer',
    }
    return (
        <div style={popover}>
            <ChromePicker
                color={color.rgb}
                onChange={(color) => handleChangeColor(color)}
                disableAlpha={false}
            />
        </div>
    )
}
