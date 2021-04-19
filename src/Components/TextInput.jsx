import React from 'react'

function TextInput(props) {
    const style = {
        outline: {
            padding: 5,
            width: "100%",
            // border: "1px solid var(--nb_primary__light)",
            border: "0px solid var(--nb_primary__light)",
            borderRadius: "5px",
            overflow:'hidden'
        },
        input: {
            border: "none",
            width: "100%",
            borderRadius: "5px",
            outline: "none",
            height:40,
        },
        label:{
            fontSize:28
        }
    }
    return (
        <div className="text-start">
            <div className="my-2" style={style.label}>
            {props.label}
            </div>
            <div className="shadow px-2" style={style.outline}>
                <label htmlFor="email" className="w-100">
                    <input style={style.input} {...props} />
                </label>
            </div>
        </div>)
}

export default TextInput
