import { useState } from 'react'

function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false)
    const style = {
        outline: {
            padding: 5,
            width: "100%",
            // border: "1px solid var(--nb_primary__light)",
            border: props.bordered ? "2px solid var(--nb_primary__light)" : "0px solid var(--nb_primary__light)",
            borderRadius: "4px",
            overflow: 'hidden'
        },
        outline2: {
            padding: 5,
            width: "100%",
            // border: "1px solid var(--nb_primary__light)",
            border: "2px solid var(--nb_primary__light)",
            borderRadius: "5px",
            overflow: 'hidden'
        },
        input: {
            border: "none",
            width: "100%",
            outline: "none",
            height: 37
        },
        label: {
            fontSize: 18
        }
    }
    return (
        <div>
            <div className="text-start d-none d-lg-block">
                <div className="my-2 " style={style.label}>
                    {props.label}
                </div>
                <div className="shadow d-flex justify-content-between px-2" style={style.outline2}>
                    <label htmlFor="email" className="w-100">
                        <input style={style.input} {...props} type={showPassword ? "text" : "password"} />
                    </label>
                    <div className="my-auto mx-2 cp" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                            <i class="fas fa-eye"></i>
                            : <i class="fas fa-eye-slash"></i>}
                    </div>
                </div>
            </div>
            <div className="text-start d-lg-none">
                <div className="shadow d-flex justify-content-between px-2" style={style.outline}>
                    <label htmlFor="email" className="w-100">
                        <input style={style.input} {...props} type={showPassword ? "text" : "password"} />
                    </label>
                    <div className="my-auto mx-2 cp" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                            <i class="fas fa-eye"></i>
                            : <i class="fas fa-eye-slash"></i>}
                    </div>
                </div>
            </div>
        </div>)
}

export default PasswordInput
