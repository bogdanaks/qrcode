import React from 'react'
import { useScreenshot } from 'use-screenshot-hook'

import styles from './styles.module.scss'

interface SaveBlockProps {
    qrBlockRef: React.RefObject<HTMLDivElement>
}

export const SaveBlock: React.FC<SaveBlockProps> = ({ qrBlockRef }) => {
    const { image, takeScreenshot } = useScreenshot({ ref: qrBlockRef })
    const resultRef = React.useRef<HTMLAnchorElement>(null)

    const handleSaveImage = () => {
        resultRef.current?.click()
    }
    const handleScreenshot = (e: React.MouseEvent) => {
        e.preventDefault()
        takeScreenshot('png')
    }

    return (
        <div className={styles.saveBlock}>
            <button onClick={handleSaveImage} onMouseEnter={handleScreenshot}>
                Download
            </button>

            <a href={image} ref={resultRef} style={{ display: 'none' }} download="qrCode.png">
                Dowload
            </a>
        </div>
    )
}
