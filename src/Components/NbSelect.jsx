import { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
function NbSelect({
    setSelectedItem,
    selectedItem,
    placeholder,
    options = [],
    error, id, label, required,bordered
}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div className="my-lg-4">
            <div className="my-2 d-none d-lg-block ap_label">
                {label}
            </div>
            {/* for desktop */}
            <div className="cursor-pointer d-none d-lg-block">
                <Dropdown
                    className="d-inline-block position-relative w-100 shadow br"
                    onToggle={() => setIsPopupOpen(!isPopupOpen)}
                    id={id}
                >
                    <Dropdown.Toggle
                        as="div"
                        bsPrefix="border-radius py-auto pg-text d-flex justify-content-between"
                        style={{
                            // border: error ? "2px solid #f00" : "0px solid #acd4ff",
                            border: bordered ? "2px solid var(--nb_primary__light)" : "0px solid var(--nb_primary__light)",
                            borderRadius: "8px",
                            height: 50,
                            padding: "6px 10px",
                            width: "100%",
                        }}
                    >
                        <span
                            id="selected-item"
                            className="my-auto"
                            style={{ color: selectedItem ? "#000" : "grey" ,fontSize:16}}
                        >
                            {selectedItem || placeholder}
                        </span>{" "}
                        <i
                            className="fa fa-chevron-down my-auto transition-all fs-6 mx-2"
                            aria-hidden="true"
                            style={{
                                transform: isPopupOpen ? "rotate(-180deg)" : "rotate(0deg)",
                            }}
                        ></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        bsPrefix="dropdown-menu w-100 border-radius"
                        style={{
                            borderRadius: 8,
                            background: "white",
                            zIndex: 9999,
                            opacity: 1,
                        }}
                    >
                        {options?.map((option, i) => {
                            return (
                                <Dropdown.Item
                                    eventKey="1"
                                    onClick={() => setSelectedItem(option)}
                                    key={i}
                                    className="pg-text text-dark"
                                    id={`select-option__${option}`}
                                >
                                    {option}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="cursor-pointer d-lg-none">
                <Dropdown
                    className="d-inline-block position-relative w-100 shadow br"
                    onToggle={() => setIsPopupOpen(!isPopupOpen)}
                    id={id}
                >
                    <Dropdown.Toggle
                        as="div"
                        bsPrefix="border-radius py-auto pg-text d-flex justify-content-between"
                        style={{
                            border: error ? "2px solid #f00" : "2px solid var(--nb_primary__light)",
                            borderRadius: "8px",
                            height: 50,
                            padding: "6px 10px",
                            width: "100%",
                        }}
                    >
                        <span
                            id="selected-item"
                            className="my-auto"
                            style={{ fontSize: 14, color: selectedItem ? "#000" : "grey" }}
                        >
                            {selectedItem || placeholder}
                        </span>{" "}
                        <i
                            className="fa fa-chevron-down my-auto transition-all fs-4"
                            aria-hidden="true"
                            style={{
                                transform: isPopupOpen ? "rotate(-180deg)" : "rotate(0deg)",
                            }}
                        ></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        bsPrefix="dropdown-menu w-100 border-radius"
                        style={{
                            borderRadius: 8,
                            background: "white",
                            zIndex: 9999,
                            opacity: 1,
                        }}
                    >
                        {options?.map((option, i) => {
                            return (
                                <Dropdown.Item
                                    eventKey="1"
                                    onClick={() => setSelectedItem(option)}
                                    key={i}
                                    className="pg-text text-dark"
                                    id={`select-option__${option}`}
                                >
                                    {option}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default NbSelect
