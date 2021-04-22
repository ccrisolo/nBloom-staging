import { useNavigate } from 'react-router-dom'


import TextInput from '../TextInput'
import TextArea from '../TextArea'
import NbSelect from '../NbSelect'
import NbCheckbox from '../NbCheckbox'
import MobileBackButton from '../MobileBackButton'

function CoachCreate2() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="d-lg-none mt-3">
                <MobileBackButton onClick={() => navigate(-1)} />
                <div className="ap-heading my-2 my-lg-5">
                    Create Profile
                </div>
                <div className="step-text mt-3">
                    Section 2 of 4
                </div>
            </div>
            <div className="d-lg-flex justify-content-between mb-2 d-none">
                <div className="text-left" style={{ color: '#6666FF', height: 35 }}>
                    <button
                        style={{ color: '#6666FF', height: 50, verticalAlign: 'sub' }}
                        className="btn btn-rounded shadow px-3"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>
                <div className="step-text">
                    Section 2 of 4
                </div>
            </div>
            <div className="ap-desc__bold my-0 my-lg-5">
                On Your Purpose
            </div>
            <div>
                <div className="col-12 col-xl-11 col-lg-10">
                    <div className="my-1">
                        <div className="my-2 d-lg-none ap-label">What Is Your Purpose? (In 100 Words Or Less)</div>
                        <TextArea
                            label="What Is Your Purpose? (In 100 Words Or Less)"
                            placeholder="make a statement"
                            rows={3}
                            bordered={true}
                        />
                    </div>
                    <div className="my-3 text-center">
                        <div className="my-2 text-start ap-label">In 15 Seconds Or Less, Let Coachees Know Your "Why" For Being A Coach... </div>
                        <i class="my-lg-5 my-2 fas fa-microphone fs-1 text-dark" style={{ color: "#3E3E70" }}></i>
                    </div>
                    <div className="my-1">
                        <div className="my-2 d-lg-none ap-label">Do You Have Any Specialties? Write Them In Separated By A Hashtag</div>
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
