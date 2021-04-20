import { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
function NbSelect({
    setSelectedItem,
    selectedItem,
    placeholder,
    options = [],
    error, id, label, required
}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div className="my-4 ">
            <div className="my-2" style={{fontSize:28}}>
                {label}
            </div>
            <div className="cursor-pointer">
                <Dropdown
                    className="d-inline-block position-relative w-100 shadow br"
                    onToggle={() => setIsPopupOpen(!isPopupOpen)}
                    id={id}
                >
                    <Dropdown.Toggle
                        as="div"
                        bsPrefix="border-radius py-auto pg-text d-flex justify-content-between"
                        style={{
                            border: error ? "2px solid #f00" : "0px solid #acd4ff",
                            borderRadius: "8px",
                            height: 50,
                            padding: "6px 10px",
                            width: "100%",
                        }}
                    >
                        <span
                            id="selected-item"
                            className="my-auto"
                            style={{ color: selectedItem ? "#000" : "grey" }}
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
                <div
                    className="text-danger mx-2 my-1 transition-all"
                    style={error ? { opacity: 1 } : { opacity: 0 }}
                >
                    <i className="fas fa-info-circle"></i> {error}
                </div>
            </div>
        </div>
    );
}

export default NbSelect
