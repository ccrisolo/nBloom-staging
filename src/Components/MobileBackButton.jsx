import React from 'react'

function MobileBackButton({ onClick }) {
    return (
        <div
            style={{ color: '#6666FF', fontSize: 17, fontWeight: 'bold' }}
            className="d-lg-none"
            onClick={onClick}
        >
            <i
                style={{ fontSize: 14 }}
                className="fa fa-chevron-left me-1"
            ></i> Back
        </div>
    )
}

export default MobileBackButton
