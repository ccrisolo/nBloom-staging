import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'
import { changeAccountPageContext } from '../../store/actions/UI'
import { updateUserCred } from '../../store/actions/account'
import NbSelect from '../NbSelect'

function Singup1() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);
    const name = useSelector(state => state.account.name);
    const dob = useSelector(state => state.account.dob);
    const work = useSelector(state => state.account.work);
    return (
        <div className="container-fluid mx-0">
            <div className="account-container position-relative">
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
                        Signup
                    </div>
                    <div className="col-6 col-lg-3 text-end nb-text__sm mt-lg-5 mt-2">
                        Step 2 of 3
                    </div>
                </div>
                <div className="my-2 my-lg-4">
                    <div className="text-lg-center nb-heading__sub my-5 my-lg-1">
                        let's get to know you better!
                    </div>
                    <div className="my-2 my-lg-5">
                        <TextInput
                            value={name}
                            placeholder="Enter your name"
                            label="Name"
                            type="text"
                            onInput={(e) => dispatch(updateUserCred({ name: e.target.value }))}
                        />
                    </div>
                    <div className="my-2 my-lg-5">
                        <TextInput
                            value={dob}
                            placeholder="Your birthday"
                            label="Birthday"
                            type="date"
                            onInput={(e) => dispatch(updateUserCred({ dob: e.target.value }))}
                        />
                    </div>
                    <div className="my-2 my-lg-5">
                        <NbSelect
                            setSelectedItem={(data) => dispatch(updateUserCred({ work: data }))}
                            selectedItem={work}
                            options={['work 1', 'work 2']}
                            label="what do you do for work?"
                            placeholder="select one option" />
                    </div>
                    <div className="my-2 my-lg-5 text-center">
                        <button
                            className="btn btn-secondary w-75"
                            onClick={() => navigate('/signup_3')}>Next</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Singup1