
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import GoogleIcom from '../../assets/google.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import PasswordInput from "../PasswordInput"
import TextInput from "../TextInput"

import { changeAccountPageContext } from '../../store/actions/UI'
import { authenticate } from '../../store/actions/auth'
import ForgotPassword from './ForgotPassword';
import Modal from '../Modal';
import NbCheckbox from '../NbCheckbox';
import OutlineButtonIcon from '../OutlineButtonIcon';
import MobileBackButton from '../MobileBackButton';


function Login() {
    const navigate = useNavigate();
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(authenticate(true))
        navigate('/consult')
    }
    return (
        <div className="">
            <div className="d-lg-none mt-3">
                <MobileBackButton onClick={() => navigate(-1)} />
            </div>
            <Modal
                onClose={() => setShowForgotPassword(false)}
                show={showForgotPassword}
            >
                <ForgotPassword onCancel={() => setShowForgotPassword(false)} />
            </Modal>

            <div className="">
                <div className="text-center ap-title my-2 d-none d-lg-block ">
                    Login
                </div>
                <div className="text-lg-center ap-title my-3 d-lg-none">
                    Sign In
                </div>
                <div className="my-3 text-lg-center ap-desc">
                    <div className="">
                        Hello again!
                    </div>
                    <div className="ap-desc">
                        sign in with your username & password
                    </div>
                </div>
                <form onSubmit={(e) => handleLogin(e)} className="my-5 my-lg-0">
                    <div className="my-3">
                        <TextInput label="Email" placeholder="Enter your email" />
                    </div>
                    <div className="my-3">
                        <PasswordInput label="Password" placeholder="Enter your password" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <NbCheckbox
                            label={"Keep me signed in"}
                        // onCheck={()=>}
                        // checked={true}
                        />
                        <div className="nb-text__sm cp my-auto" onClick={() => setShowForgotPassword(true)}>Forgot password ?</div>
                    </div>
                    <div className="text-center w-100 my-3 my-lg-3">
                        <button className="btn btn-secondary w-100 w-lg-75 my-3 br py-2" type="submit">Next </button>
                    </div>
                </form>
                <div className="position-relative my-2 my-lg-4 d-none d-lg-block" style={{}}>
                    <hr />
                    <span className="position-absolute bg-white px-3 nb-text__sm" style={{ right: "50%", transform: 'translateX(50%)', top: "-10px" }}>OR</span>
                </div>
                <div className="nb-text__sm d-lg-none text-center">
                    or you can easily sign in with
                </div>
                <div className="row  justify-content-center">
                    <div className="col-lg-12 col-3">
                        <OutlineButtonIcon
                            onClick={() => window.open("https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin")}
                            className="my-2 mx-auto px-0 pe-4 ps-2"
                            borderRadius="50px"
                            outlineColor="#D3D3D3"
                            outlineWidth="1px"
                            Icon={<img src={GoogleIcom} alt="" style={{ width: 30, height: 30 }} className="mx-2" />}
                            label="Continue with google"
                        />
                    </div>
                    <div className="col-2 my-auto d-lg-none nb-text__sm d-inline-block">or with</div>
                    <div className="col-lg-12 col-3 ">
                        <OutlineButtonIcon
                            onClick={() => window.open("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")}
                            outlineWidth="1px"
                            className="my-2 mx-auto px-3"
                            borderRadius="50px"
                            outlineColor="#D3D3D3"
                            Icon={<img src={LinkedInIcon} alt="" style={{ width: 30, height: 30 }} className="mx-2" />}
                            label="Continue with LinkedIn"
                        />
                    </div>
                </div>
                <div className="sign-up-btn text-center w-100 my-2 mt-lg-0 pt-5 pt-lg-0" style={{ bottom: 10, left: 0 }}>
                    New to 'nBloom? {" "}
                    <span className="cp" onClick={() => navigate('/auth/signup_1')} style={{ color: '#3E3E70' }}>
                        Sign up here
                    </span>
                </div>

            </div>
        </div>

    )
}

export default Login
