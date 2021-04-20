
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import GoogleIcom from '../../assets/google.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import PasswordInput from "../PasswordInput"
import TextInput from "../TextInput"

import { changeAccountPageContext } from '../../store/actions/UI'
import ForgotPassword from './ForgotPassword';
import Modal from '../Modal';


function Login() {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);

    return (
        <div className="">
            <Modal
                onClose={() => setShowForgotPassword(false)}
                show={showForgotPassword}
                body={
                    <ForgotPassword onCancel={() => setShowForgotPassword(false)} />
                } />
            <div className="text-center fw-bold fs-2 my-2 my-lg-4">
                Login
            </div>
            <div className="text-center fw-bold">
                Hello again!
            </div>
            <div className="text-center fw-bold">
                sign in with your username & password
            </div>
            <form>
                <div className="my-3">
                    <TextInput label="Email" placeholder="Enter Email" />
                </div>
                <div className="my-3">
                    <PasswordInput label="Password" placeholder="Enter Password" />
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <div>
                        <label htmlFor="sgi">
                            <input type="checkbox" defaultChecked={false} /> Keep me signed in
                        </label>
                    </div>
                    <div className="fs-6" onClick={() => setShowForgotPassword(true)}>Forgot password ?</div>
                </div>
                <div className="text-center w-100">
                    <button className="btn btn-secondary w-75 my-5 br py-3">Next </button>
                </div>
            </form>
            <div className="position-relative my-3 mx-5" style={{ border: ".1px solid rgba(0,0,0,0.2)" }}>
                <span className="position-absolute bg-white px-3" style={{ right: "50%", transform: 'translateX(50%)', top: "-13px" }}>OR</span>
            </div>
            <div className="text-center">
                <div className="cp my-4">
                    <button className="btn btn-rounded btn-outline__dark px-3">
                        <img src={GoogleIcom} alt="" style={{ width: 25, height: 30 }} className="mx-2" /> Continue With google
                        </button>
                </div>
                <div className="cp my-4">
                    <button className="btn btn-rounded fs-6 btn-outline__dark px-3">
                        <img src={LinkedInIcon} alt="" style={{ width: 25, height: 30 }} className="mx-2" /> Continue With LinkedIn
                        </button>
                </div>
            </div>
            <div className="sign-up-btn text-center w-100 my-2 mt-lg-0 pt-5 pt-lg-0" style={{ bottom: 0, left: 0 }}>
                New to 'nBloom? <span className="nb-link cp" onClick={() => {
                    dispatch(changeAccountPageContext("signup"))
                }}>Sign up here</span>
            </div>
        </div>

    )
}

export default Login
