import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import JourneyImage from '../../assets/journey.svg'
import MobileBackButton from '../MobileBackButton';
// import PasswordInput from '../PasswordInput'
// import TextInput from '../TextInput'
// import { changeAccountPageContext } from '../../store/actions/UI'
// import { updateUserCred } from '../../store/actions/account'

function Signup2() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);
    const name = useSelector(state => state.account.name);
    const journeyType = useSelector(state => state.account.journeyType);
    console.dir(navigate)
    return (
        <div className="">
            <div className="d-lg-none mt-3">
                <MobileBackButton
                    onClick={() => navigate(-1)}
                />
            </div>
            <div className="">
                <div className="row justify-content-lg-between">
                    <div className="text-left col-12 col-lg-3 d-none d-lg-block" style={{ color: '#6666FF', height: 35 }}>
                        <button
                            style={{ color: '#6666FF', height: 50 }}
                            className="btn btn-rounded shadow mt-3 px-3"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                    </div>
                    <div className="text-lg-center col-6 col-lg-6 ap-title mt-lg-3 mt-0">
                        Hi {name}!
                    </div>
                    <div className="col-6 col-lg-3 text-end step-text mt-lg-4 mt-1">
                        Step 3 of 3
                    </div>
                </div>
                <div className="d-lg-none text-center my-3">
                    <img src={JourneyImage} alt="" />
                </div>
                <div className="row justify-content-center h-100 my-5 pt-lg-5">
                    <div className="col-12 my-lg-5 my-2 text-center fw-bold">
                        How would you like to start journey?
                    </div>
                    <div className="col-6 col-lg-12 my-3 text-center">
                        <button
                            onClick={() => navigate('/coach')}
                            className="btn py-lg-2 w-75" style={{ background: '#EB90A2', fontWeight:'light'  }}>Be a coach</button>
                    </div>
                    <div className="col-6 col-lg-12 my-3 text-center">
                        <button className="btn py-lg-2  w-75" style={{ background: '#C5ADEE', fontWeight:100 }}>Get a coach</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup2
