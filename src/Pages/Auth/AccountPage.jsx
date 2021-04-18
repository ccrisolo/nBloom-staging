import React from 'react'
import Header from '../../Components/Header'


function AccountPage() {
    return (
        <div>
            <Header context="login"/>
            <div className="row" >
                <div className="col-7 " style={{height:'90vh'}}>
                    Image Carousal
                </div>
                <div className="col-5" style={{borderLeft:'1px solid #000'}}>
                    For login and signup
                </div>
            </div>
        </div>
    )
}

export default AccountPage
