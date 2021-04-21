import React from 'react'

function OutlineButtonIcon({ onClick, Icon, label, borderRadius, outlineColor, style, className }) {
    const _style = {
        outline: {
            borderRadius: borderRadius,
            border: `1px solid ${outlineColor}`,
            width:'fit-content'
        }
    }
    return (
        <div
            className={`cp d-flex justify-content-between p-1 ${className}`}
            style={{ ...style, ..._style.outline }}
            onClick={onClick}
        >
            <div>{Icon}</div>
            <div className="d-none d-lg-inline-block">{label}</div>
        </div >
    )
}

export default OutlineButtonIcon
