
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory, Outlet } from "react-router-dom";

import Header from '../../Components/Header'

import '../../styles/account.css'

import Login from '../../Components/AccountPage/Login';
import Signup from '../../Components/AccountPage/Signup';
import Singup1 from '../../Components/AccountPage/Signup1';
import Signup2 from '../../Components/AccountPage/Signup2';
import CarousalContent from '../../Components/AccountPage/CarousalContent';

function AccountPage({ match }) {
    const accountPageContext = useSelector(state => state.ui.accountPageContext);
    return (
        <div>
            <div className="row account-page">
                <div className="col-12 col-lg-6 position-relative p-0 left-panel d-none d-lg-inline-block">
                    <CarousalContent />
                </div>
                <div className="col-12 col-lg-6 right-panel position-relative d-none d-lg-inline-block">
                    <div className="container-fluid px-1 px-lg-5">
                        <div className="container-xl">
                            <div className="account-container">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    {/* <div className="container-fluid">
                        {accountPageContext === "login" && <Login />}
                        {accountPageContext === "signup" && <Signup />}
                        {accountPageContext === "signup1" && <Singup1 />}
                        {accountPageContext === "signup2" && <Signup2 />}
                    </div> */}
                </div>
            </div>
            <div className="container-fluid px-1 px-lg-5 d-lg-none">
                <div className="container-xl">
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default AccountPage

