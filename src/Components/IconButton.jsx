import React from 'react'

function IconButton({ icon, label }) {
    return (
        <div className="d-flex justify-content-between px-1 mx-1" style={{ lineHeight:'35px', background: '#C5C4CE', borderRadius: 6, color: '#3E3E70' }}>
            <div className="my-auto">{icon}</div>
            <div className="mx-2">{label}</div>
        </div>
    )
}

export default IconButton
