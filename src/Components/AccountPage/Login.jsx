
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import GoogleIcom from '../../assets/google.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import PasswordInput from "../PasswordInput"
import TextInput from "../TextInput"

import { changeAccountPageContext } from '../../store/actions/UI'
import ForgotPassword from './ForgotPassword';
import Modal from '../Modal';
import NbCheckbox from '../NbCheckbox';
import OutlineButtonIcon from '../OutlineButtonIcon';


function Login() {
    const navigate = useNavigate();
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);

    return (
        <div className="account-container px-lg-5">
            <Modal
                onClose={() => setShowForgotPassword(false)}
                show={showForgotPassword}
                body={
                    <ForgotPassword onCancel={() => setShowForgotPassword(false)} />
                } />

            <div className="container">
                <div className="text-center nb-heading my-3">
                    Login
            </div>
                <div className="my-3">
                    <div className="text-center nb-heading__sub">
                        Hello again!
                    </div>
                    <div className="text-center nb-heading__sub">
                        sign in with your username & password
                    </div>
                </div>
                <form>
                    <div className="my-3">
                        <TextInput label="Email" placeholder="Enter your email" />
                    </div>
                    <div className="my-3">
                        <PasswordInput label="Password" placeholder="Enter your password" />
                    </div>
                    <div className="d-flex justify-content-between my-2">
                        <NbCheckbox
                            label={"Keep me signed in"}
                            // onCheck={()=>}
                            checked={true}
                        />
                        <div className="nb-text__sm cp" onClick={() => setShowForgotPassword(true)}>Forgot password ?</div>
                    </div>
                    <div className="text-center w-100">
                        <button className="btn btn-secondary w-75 my-3 br py-2">Next </button>
                    </div>
                </form>
                <div className="position-relative my-4" style={{ border: ".1px solid rgba(0,0,0,0.2)" }}>
                    <span className="position-absolute bg-white px-3 nb-text__sm" style={{ right: "50%", transform: 'translateX(50%)', top: "-13px" }}>OR</span>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-lg-12 col-3">
                        <OutlineButtonIcon
                            className="my-2 mx-auto px-2 nb-text__bold__sm"
                            borderRadius="50px"
                            outlineColor="#000"
                            Icon={<img src={GoogleIcom} alt="" style={{ width: 20, height: 25 }} className="mx-2" />}
                            label="Continue with google"
                        />
                    </div>
                    <div className="col-lg-12 col-3">
                        <OutlineButtonIcon
                            className="my-2 mx-auto nb-text__bold__sm px-2"
                            borderRadius="50px"
                            outlineColor="#000"
                            Icon={<img src={LinkedInIcon} alt="" style={{ width: 20, height: 25 }} className="mx-2" />}
                            label="Continue with LinkedIn"
                        />
                    </div>
                </div>
                <div className="sign-up-btn text-center nb-text__sm w-100 my-2 mt-lg-0 pt-5 pt-lg-0" style={{ bottom: 10, left: 0 }}>
                    New to 'nBloom? {" "}
                    <span className="nb-link cp" onClick={() => navigate('/signup_1')}>
                        Sign up here
                    </span>
                </div>

            </div>
        </div>

    )
}

export default Login
