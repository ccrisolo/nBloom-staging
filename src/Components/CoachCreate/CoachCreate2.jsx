import { useNavigate } from 'react-router-dom'


import TextInput from '../TextInput'
import TextArea from '../TextArea'
import NbSelect from '../NbSelect'
import NbCheckbox from '../NbCheckbox'

function CoachCreate2() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="d-flex justify-content-between my-2">
                <div className="text-left" style={{ color: '#6666FF', height: 35 }}>
                    <button
                        style={{ color: '#6666FF' }}
                        className="btn btn-rounded shadow px-3 h-100 py-auto d-none d-lg-block"
                        onClick={() => navigate(-1)}
                    >
                        Back
                        </button>
                    <div
                        style={{ color: '#6666FF', fontSize: 17 }}
                        className="d-lg-none my-2"
                        onClick={() => navigate(-1)}
                    >
                        <i className="fa fa-chevron-left"></i> Back
                    </div>
                </div>
                <div className="nb-text__sm">
                    Section 2 of 4
                </div>
            </div>
            <div className="nb-text__bold my-5">
                On Your Purpose
            </div>
            <div>
                <div className="col-12 col-xl-11 col-lg-10">
                    <div className="my-1">
                        <div className="my-2 d-lg-none">What Is Your Purpose? (In 100 Words Or Less)</div>
                        <TextArea
                            label="What Is Your Purpose? (In 100 Words Or Less)"
                            placeholder="make a statement"
                            rows={4}
                            bordered={true}
                        />
                    </div>
                    <div className="my-3 text-center">
                        <div className="my-2 text-start">In 15 Seconds Or Less, Let Coachees Know Your "Why" For Being A Coach... </div>
                        <i class="my-5 fas fa-microphone fs-2 text-dark"></i>
                    </div>
                    <div className="my-1">
                        <div className="my-2 d-lg-none">Do You Have Any Specialties? Write Them In Separated By A Hashtag</div>
                        <TextInput
                            label="Do You Have Any Specialties? 
                            Write Them In Separated By A Hashtag"
                            placeholder="#midlevel #manager"
                            type="text"
                            bordered={true}
                        />
                    </div>
                </div>
                <div className="text-center my-2 mt-lg-3">
                    <button className="btn bgc-primary" onClick={() => navigate('/coach/create/step_3')}>
                        Save & Continue
                </button>
                </div>

            </div>
        </div>
    )
}

export default CoachCreate2
