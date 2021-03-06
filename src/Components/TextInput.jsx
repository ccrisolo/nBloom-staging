import React from 'react'

function TextInput(props) {
    const style = {
        outline: {
            padding: 5,
            width: "100%",
            // border: "1px solid var(--nb_primary__light)",
            border: props.bordered ? "2px solid var(--nb_primary__light)" : "0px solid var(--nb_primary__light)",
            borderRadius: "5px",
            overflow: 'hidden'
        },
        outline2: {
            padding: 5,
            width: "100%",
            // border: "1px solid var(--nb_primary__light)",
            border: "2px solid var(--nb_primary__light)",
            borderRadius: "10px",
            overflow: 'hidden'
        },
        input: {
            border: "none",
            width: "100%",
            borderRadius: "5px",
            outline: "none",
            height: 37,
        },
        label: {
            fontSize: 18
        }
    }
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="my-2 ap_label" style={style.label}>
                    {props.label}
                </div>
                <div className="shadow-lg px-2" style={style.outline}>
                    <label htmlFor="email" className="w-100">
                        <input style={style.input} {...props} />
                    </label>
                </div>
            </div>
            <div className="text-start d-lg-none">
                <div className="shadow-sm px-2" style={style.outline2}>
                    <label htmlFor="email" className="w-100">
                        <input style={style.input} {...props} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TextInput
