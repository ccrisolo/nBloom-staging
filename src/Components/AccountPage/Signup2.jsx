import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import JourneyImage from '../../assets/journey.svg'
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
            <div className="">
            <div className="row justify-content-lg-between">
                    <div className="text-left col-12 col-lg-3 my-auto" style={{ color: '#6666FF', height: 35 }}>
                        <button
                            style={{ color: '#6666FF' }}
                            className="btn btn-rounded shadow mt-3 px-3 h-100 py-auto d-none d-lg-block"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                        <div
                            style={{ color: '#6666FF',fontSize:17 }}
                            className="d-lg-none my-2"
                            onClick={() => navigate(-1)}
                        >
                            <i className="fa fa-chevron-left"></i> Back
                        </div>
                    </div>
                    <div className="text-lg-center col-6 col-lg-6 mt-lg-5 nb-heading">
                        Hi {name}!
                    </div>
                    <div className="col-6 col-lg-3 text-end nb-text__sm mt-lg-5 mt-2">
                        Step 3 of 3
                    </div>
                </div>
                <div className="d-lg-none text-center my-3">
                    <img src={JourneyImage} alt=""/>
                </div>
                <div className="row justify-content-center h-100 my-5 pt-lg-5">
                    <div className="col-12 my-lg-5 my-2 text-center fw-bold">
                        How would you like to start journey?
                    </div>
                    <div className="col-6 col-lg-12 my-3 text-center">
                        <button
                            onClick={() => navigate('/auth/coach')}
                            className="btn py-lg-2 w-75" style={{ background: '#EB90A2', textTransform: 'unset' }}>Be a coach</button>
                    </div>
                    <div className="col-6 col-lg-12 my-3 text-center">
                        <button className="btn py-lg-2  w-75" style={{ background: '#C5ADEE', textTransform: 'unset' }}>Get a coach</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup2
