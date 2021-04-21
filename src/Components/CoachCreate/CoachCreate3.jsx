import { useNavigate } from 'react-router-dom'


import TextInput from '../TextInput'
import TextArea from '../TextArea'
import NbSelect from '../NbSelect'
import NbCheckbox from '../NbCheckbox'
import TextInputWithIcon from '../TextInputWithIcon'

import LinkedIn from '../../assets/linkedin.svg'
import YouTUbe from '../../assets/youtube.svg'
import Insta from '../../assets/insta.svg'

function CoachCreate3() {
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
                    Section 3 of 4
            </div>
            </div>
            <div className="nb-text__bold my-5">
                Be Social
        </div>
            <div>
                <div className="col-12 col-xl-11 col-lg-10">
                    <div className="my-2">Connect Your Socials & Calendar</div>
                    <div className="my-3">
                        <TextInputWithIcon
                            icon={LinkedIn}
                            label="Connect Your Socials & Calendar"
                            placeholder="Your Linkedin URL "
                        />
                    </div>
                    <div className="my-3">
                        <TextInputWithIcon
                            icon={Insta}
                            label="Connect Your Socials & Calendar"
                            placeholder="Your Instagram username"
                        />
                    </div>
                    <div className="my-3">
                        <TextInputWithIcon
                            icon={YouTUbe}
                            label="Connect Your Socials & Calendar"
                            placeholder="Your YouTube channel"
                        />
                    </div>

                </div>
                <div className="text-center my-2 mt-lg-5 py-lg-5">
                    <button className="btn bgc-primary" onClick={() => navigate('/coach/create/step_4')}>
                        Save & Continue
            </button>
                </div>

            </div>
        </div>
    )
}

export default CoachCreate3
