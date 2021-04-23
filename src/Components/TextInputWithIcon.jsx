import React from 'react'

function TextInputWithIcon(props) {
    const style = {
        outline: {
            width: "100%",
            // border: "1px solid var(--nb_primary__light)",
            border: "0px solid var(--nb_primary__light)",
            borderRadius: "12px",
            overflow: 'hidden'
        },
        outline2: {
            // padding: 5,
            width: "100%",
            // border: "1px solid var(--nb_primary__light)",
            border: "2px solid var(--nb_primary__light)",
            borderRadius: "12px",
            overflow: 'hidden'
        },
        input: {
            border: "none",
            width: "100%",
            borderRadius: "5px",
            outline: "none",
            height: "100%",
            backgroundColor:'transparent'
        },
        label: {
            fontSize: 18
        },
        icon: {
            padding:5,
            border: "3px solid var(--nb_primary__light)",
            borderTopLeftRadius:12,
            borderBottomLeftRadius:12
        }

    }
    return (
        <div>
            <div className="d-none d-lg-block">
                {/* <div className="my-2" style={style.label}>
                    {props.label}
                </div> */}
                <div className="d-flex shadow p-0" style={style.outline}>
                    <img className="me-2 ps-3" src={props.icon} style={style.icon}  />
                    <label htmlFor="email" className="w-100">
                        <input style={style.input} {...props} />
                    </label>
                </div>
            </div>
            <div className="text-start d-lg-none">
                <div className="d-flex shadow pe-2" style={style.outline2}>
                    <img className="me-2 ps-3" src={props.icon} style={style.icon} />
                    <label htmlFor="email" className="w-100 bg-transparent">
                        <input style={style.input} {...props} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TextInputWithIcon
