import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'
import { changeAccountPageContext } from '../../store/actions/UI'
import { updateUserCred } from '../../store/actions/account'
import NbSelect from '../NbSelect'

function Singup1() {
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);
    const name = useSelector(state => state.account.name);
    const dob = useSelector(state => state.account.dob);
    const work = useSelector(state => state.account.work);
    return (
        <div className=" position-relative">
            <div className="d-flex justify-content-between">
                <button
                    style={{ color: '#6666FF' }}
                    className="btn btn-rounded shadow my-3 px-3"
                    onClick={() => { dispatch(changeAccountPageContext("signup")) }}
                >
                    Back
                </button>
                <div className="text-center fw-bold fs-2 my-2">
                    Signup
                </div>
                <div className="text-center my-auto">
                    Step 2 of 3
                </div>
            </div>
            <div className="text-center fw-bold">
                let's get to know you better!
            </div>
            <div className="my-5">
                <TextInput
                    value={name}
                    placeholder="Enter your name"
                    label="Name"
                    type="text"
                    onInput={(e) => dispatch(updateUserCred({ name: e.target.value }))}
                />
            </div>
            <div className="my-5">
                <TextInput
                    value={dob}
                    placeholder="Your birthday"
                    label="Birthday"
                    type="date"
                    onInput={(e) => dispatch(updateUserCred({ dob: e.target.value }))}
                />
            </div>
            <div className="my-5">
                <NbSelect
                    setSelectedItem={(data) => dispatch(updateUserCred({ work: data }))}
                    selectedItem={work}
                    options={['work 1', 'work 2']}
                    label="what do you do for work?"
                    placeholder="select one option" />
            </div>
            <div className="my-5 text-center">
                <button className="btn btn-secondary w-75 py-3" onClick={() => { dispatch(changeAccountPageContext("signup2")) }}>Next</button>
            </div>
        </div>
    )
}

export default Singup1
