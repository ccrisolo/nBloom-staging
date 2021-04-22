import React from 'react'
import { Outlet } from 'react-router-dom'

function CoachCreate() {
    return (
        <div className="container-fluid mx-0">
            <div className="container-xl my-2 px-0">
                <div className="row justify-content-center my-auto">
                    <div className="col-lg-7 col-xl-6 shadow-lg br px-lg-3 p-lg-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachCreate
