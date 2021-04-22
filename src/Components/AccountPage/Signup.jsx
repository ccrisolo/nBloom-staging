import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'
import GoogleIcom from '../../assets/google.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import { changeAccountPageContext } from '../../store/actions/UI'
import { updateUserCred } from '../../store/actions/account'
import OutlineButtonIcon from '../OutlineButtonIcon';
import MobileBackButton from '../MobileBackButton';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accountPageContext = useSelector(state => state.ui.accountPageContext);
    const email = useSelector(state => state.account.email);
    const password = useSelector(state => state.account.password);
    const cPassword = useSelector(state => state.account.cPassword);
    // const email = useSelector(state => state.account.email);

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    return (

        <div className="">
            <div className="d-lg-none mt-3">
                <MobileBackButton onClick={() => navigate(-1)} />
            </div>
            <div className="d-flex justify-content-between">
                <div className="px-lg-5 d-none d-lg-inline-block"></div>
                <div className="text-lg-center ap-title my-2">
                    Signup
                </div>
                <div className="text-center my-auto step-text">
                    Step 1 of 3
                </div>
            </div>
            <div className="text-lg-center ap-desc mt-3 mt-lg-0">
                Welcome!
            </div>
            <div className="text-lg-center ap-desc">
                Let's get you onboarded, shall we?
            </div>
            <div className="my-1 my-lg-2 mt-5 mt-lg-0">
                <TextInput
                    value={email}
                    label="Email"
                    placeholder="Enter your email"
                    onInput={(e) => dispatch(updateUserCred({ email: e.target.value }))}
                />
            </div>
            <div className="my-2">
                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onInput={(e) => dispatch(updateUserCred({ password: e.target.value }))} />
            </div>
            <div className="my-2 d-lg-none">
                <PasswordInput
                    label="Password"
                    placeholder="Confirm password"
                    value={cPassword}
                    onInput={(e) => dispatch(updateUserCred({ cPassword: e.target.value }))} />
            </div>
            <div className="my-2 text-center">
                <button className="btn btn-secondary w-100 w-lg-75 my-3 br-lg py-2" onClick={() => {
                    navigate('/auth/signup_2')
                }}> Next</button>
            </div>
            <div className="position-relative my-2 d-none d-lg-block" style={{ border: ".1px solid rgba(0,0,0,0.2)" }}>
                <span className="position-absolute bg-white px-3 nb-text__sm" style={{ right: "50%", transform: 'translateX(50%)', top: "-13px" }}>OR</span>
            </div>
            <div className="nb-text__sm d-lg-none text-center">
                or you can sign up with
                     </div>
            <div className="row my-0 my-lg-2 justify-content-center">
                <div className="col-lg-12 col-3">
                    <OutlineButtonIcon
                        className="my-2 mx-auto px-3"
                        borderRadius="50px"
                        outlineColor="#707070"
                        outlineWidth="1px"
                        Icon={<img src={GoogleIcom} alt="" style={{ width: 30, height: 30 }} className="mx-2" />}
                        label="Continue with google"
                    />
                </div>
                <div className="col-2 my-auto d-lg-none nb-text__sm d-inline-block">or with</div>
                <div className="col-lg-12 col-3">
                    <OutlineButtonIcon
                        outlineWidth="1px"
                        className="my-2 mx-auto px-3"
                        borderRadius="50px"
                        outlineColor="#707070"
                        Icon={<img src={LinkedInIcon} alt="" style={{ width: 30, height: 30 }} className="mx-2" />}
                        label="Continue with LinkedIn"
                    />
                </div>
            </div>
            <div className="sign-up-btn text-center w-100 my-2 mt-lg-0 pt-5 pt-lg-0" style={{ bottom: 0, left: 0 }}>
                Already have an account? <span className="cp" onClick={() => navigate('/auth')} style={{ color: '#3E3E70' }}>Sign in here</span>
            </div>
        </div>

    )
}


export default Signup
