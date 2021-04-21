import React from 'react'
import { Outlet } from 'react-router-dom'

function CoachCreate() {
    return (
        <div className="container-fluid">
            <div className="container-xl my-2">
                <div className="row justify-content-center my-auto">
                    <div className="col-lg-7 col-xl-6 shadow br p-2 px-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachCreate
