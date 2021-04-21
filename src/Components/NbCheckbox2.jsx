import React from 'react'

function NbCheckbox({ label, onCheck, checked, className, name, id }) {
    return (
        <label className="nb_checkbox my-3 mx-5 pg-text" id={`${id}__label`}>
            <input
                type="checkbox"
                name={name}
                id={id}
                onChange={onCheck}
                checked={checked}
            />
            {label}
            <div className="nb_checkbox__btn" id={`${id}__cb`}></div>
        </label>
        // <div>
        //     <label htmlFor="sgi" className={`nb-text__sm ${className}`}>
        //         <input type="checkbox" onCheck={onCheck} defaultChecked={checked} /> {label}
        //     </label>
        // </div>
    )
}

export default NbCheckbox
