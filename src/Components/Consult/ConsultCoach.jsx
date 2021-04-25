import React from 'react'

function ConsultCoachModel() {
    return (
        <div className="p-4" style={{ zIndex: 99999 }}>
            <div className="float-end mx-2 nb-text-primary">
                <i class="fas fa-times cp" onClick={onCancel}></i>
            </div>
            <form>
                <TextInput placeholder="Enter email" label="Forgot Password" />
                <div className="d-flex justify-content-center my-2 mt-5">
                    <button type="submit" className="btn btn-primary px-5 mx-2" style={{ height: 47 }}>Send</button>
                    <button type="button" className="btn btn-outline px-5 mx-2" onClick={onCancel} style={{ height: 47 }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ConsultCoachModel
