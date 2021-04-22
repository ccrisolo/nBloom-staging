import React from 'react'

function OutlineButtonIcon({ onClick, Icon, label, borderRadius, outlineColor, outlineWidth, style, className }) {
    const _style = {
        outline: {
            borderRadius: borderRadius,
            border: `${outlineWidth} solid ${outlineColor}`,
            width: 'fit-content'
        },
        outline2: {
            borderRadius: borderRadius,
            border: `0 solid ${outlineColor}`,
            width: 'fit-content'
        }
    }
    return (
        <div>
            <div
                className={`cp d-lg-flex d-none justify-content-between p-1 ${className}`}
                style={{ ...style, ..._style.outline }}
                onClick={onClick}
            >
                <div>{Icon}</div>
                <div className="d-none d-lg-inline-block">{label}</div>
            </div>
            <div
                className={`cp d-flex d-lg-none justify-content-between p-1 ${className}`}
                style={{ ...style, ..._style.outline2 }}
                onClick={onClick}
            >
                <div>{Icon}</div>
                <div className="d-none d-lg-inline-block">{label}</div>
            </div>
        </div>
    )
}

export default OutlineButtonIcon
