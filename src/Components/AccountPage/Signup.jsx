import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'
import GoogleIcom from '../../assets/google.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import { changeAccountPageContext } from '../../store/actions/UI'
import { updateUserCred } from '../../store/actions/account'

const Signup = () => {
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);
    const email = useSelector(state => state.account.email);
    const password = useSelector(state => state.account.password);
    // const email = useSelector(state => state.account.email);

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    return (
        <div className="">
            <div>
                <div className="text-center fw-bold fs-2 my-2 my-lg-4">
                    Signup
                </div>
                <div className="text-center fw-bold">
                    Welcome!
                </div>
                <div className="text-center fw-bold">
                    Let's get you onboarded, shall we?
                </div>
                <div className="my-2">
                    <TextInput 
                        value={email} 
                        label="Email" 
                        placeholder="Enter your email" 
                        onInput={(e) => dispatch(updateUserCred({email: e.target.value}))}
                    />
                </div>
                <div className="my-2">
                    <PasswordInput  
                        label="Password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onInput={(e) => dispatch(updateUserCred({password: e.target.value}))}/>
                </div>
                <div className="my-5 text-center">
                    <button className="btn btn-secondary py-3 w-75" onClick={() => {
                        dispatch(changeAccountPageContext("signup1"))
                    }}> Next</button>
                </div>
                <div className="position-relative my-3 mx-5" style={{ border: ".1px solid rgba(0,0,0,0.2)" }}>
                    <span className="position-absolute bg-white px-3" style={{ right: "50%", transform: 'translateX(50%)', top: "-13px" }}>OR</span>
                </div>
                <div className="text-center my-5">
                    <div className="cp my-4">
                        <button className="btn btn-rounded btn-outline__dark w-50">
                            <img src={GoogleIcom} alt="" style={{ width: 25, height: 30 }} className="mx-2" /> Continue With google
                        </button>
                    </div>
                    <div className="cp my-4">
                        <button className="btn btn-rounded btn-outline__dark fs-6 w-50">
                            <img src={LinkedInIcon} alt="" style={{ width: 25, height: 30 }} className="mx-2" /> Continue With LinkedIn
                        </button>
                    </div>
                </div>
                <div className="sign-up-btn text-center w-100 my-2 mt-lg-0 pt-5 pt-lg-0" style={{ bottom: 0, left: 0 }}>
                    Already have an account? <span className="nb-link cp" onClick={() => {
                        dispatch(changeAccountPageContext("login"))
                    }}>Sign in here</span>
                </div>
            </div>
        </div>
    )
}


export default Signup
