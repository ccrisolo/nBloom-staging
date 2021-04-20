import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'
import { changeAccountPageContext } from '../../store/actions/UI'
import { updateUserCred } from '../../store/actions/account'
import { useHistory } from 'react-router-dom'

function Signup2() {
    const history = useHistory();
    const dispatch = useDispatch()
    const accountPageContext = useSelector(state => state.ui.accountPageContext);
    const name = useSelector(state => state.account.name);
    const journeyType = useSelector(state => state.account.journeyType);
    return (
        <div>
            <div className="d-flex justify-content-between">
                <button
                    style={{ color: '#6666FF' }}
                    className="btn btn-rounded shadow my-3 px-3"
                    onClick={() => { dispatch(changeAccountPageContext("signup1")) }}
                >
                    Back
                </button>
                <div className="text-center fw-bold fs-2 my-2">
                    Hi {name}
                </div>
                <div className="text-center my-auto">
                    Step 3 of 3
                </div>
            </div>
            <div className="row align-items-between h-100 my-5 pt-5">
                <div className="col-12 my-5 text-center fw-bold">
                    How would you like to start journey?
                </div>
                <div className="col-12 my-3 text-center">
                    <button
                        onClick={() => history.push('/coach/create')}
                        className="btn w-50 py-2" style={{ background: '#EB90A2', textTransform: 'unset' }}>Be a coach</button>
                </div>
                <div className="col-12 my-3 text-center">
                    <button className="btn w-50 py-2" style={{ background: '#C5ADEE', textTransform: 'unset' }}>Be a coach</button>
                </div>
            </div>
        </div>
    )
}

export default Signup2
