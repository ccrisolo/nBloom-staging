import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ToggleButton from 'react-toggle-button'

import TextInput from '../TextInput'
import NbSelect from '../NbSelect'
import NbCheckbox from '../NbCheckbox'
import MobileBackButton from '../MobileBackButton'

function CoachCreate1() {
    const navigate = useNavigate()
    const [takingClients, setTakingClients] = useState(false)
    return (
        <div>
            <div className="d-lg-none mt-3">
                <MobileBackButton onClick={() => navigate(-1)} />
                <div className="ap-heading my-2 my-lg-5">
                    Create a coach profile
                </div>
                <div className="step-text mt-3">
                    Section 1 of 4
                </div>
            </div>
            <div>
                <div className="d-lg-flex justify-content-between d-none">
                    <div className="ap-heading ">
                        Create a coach profile
                    </div>
                    <div className="step-text">
                        Section 1 of 4
                    </div>
                </div>
                <div className="col-12 col-xl-9 col-lg-8 col-xxl-10">
                    <div className="ap-desc__bold my-lg-4">
                        Tell Us About Your Self
                    </div>
                    <div className="position-relative my-3 my-lg-4">
                        <div
                            className="bg-secondary text-center position-relative w"
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                border: '2px solid #E97088',
                                lineHeight: 1.9,
                                fontSize: 30
                            }}
                        >
                            <i className="fa fa-user text-white"></i>
                            <div className="position-absolute" style={{ fontSize: 25, bottom: -12, right: -2, color: '#E97088' }}>
                                <i class="fas fa-plus-circle cp"></i>
                            </div>
                        </div>
                        <div className="position-absolute fst-italic fw-bold" style={{ fontSize: 12, bottom: -2, left: 65, }}>
                            click on the plus icon to add photo
                    </div>
                    </div>
                    <div className="my-1">
                        <div className="my-2 d-lg-none ap-label">Name :</div>
                        <TextInput
                            bordered={true}
                            label="Name :"
                            placeholder="Enter your name here"
                            type="text"
                        />
                    </div>
                    <div className="my-1">
                        <div className="my-2 d-lg-none ap-label">Coach Type :</div>
                        <NbSelect
                            bordered={true}
                            label="Coach Type :"
                            selectedItem={'type 1'}
                            setSelectedItem={() => { }}
                            options={['type 1', 'type 2']}
                        />
                    </div>
                    <div className="my-1">
                        <div className="my-2 d-lg-none ap-label">My rates are :</div>
                        <TextInput
                            bordered={true}
                            label="My rates are :"
                            placeholder="Enter your rate here"
                            type="number"
                        />
                    </div>
                    <div className="my-3 d-flex justify-content-between">
                        <div className="ap-label">
                            Taking Clients ?
                        </div>
                        <div className="me-3 d-none d-lg-block">
                            <ToggleButton
                                colors={{
                                    active: {
                                        base: 'green',
                                    },
                                    inactive: {
                                        base: '#FDBA13',
                                    }
                                }}
                                trackStyle={{ height: 30, width: 80, color: '#f00', padding: '0 4px' }}
                                thumbStyle={{ margin: '0 4px' }}
                                value={takingClients}
                                onToggle={(value) => setTakingClients(!takingClients)}
                            />
                        </div>
                        <div className="d-lg-none">
                            <ToggleButton
                                colors={{
                                    active: {
                                        base: 'green',
                                    },
                                    inactive: {
                                        base: '#FDBA13',
                                    }
                                }}
                                activeLabel=""
                                inactiveLabel=""
                                // trackStyle={{ height: 10, width: 20, color: '#f00',margin:-20}}
                                // thumbStyle={{  height: 10, width: 10, margin:-20}}
                                value={takingClients}
                                onToggle={(value) => setTakingClients(!takingClients)}
                            />
                        </div>
                    </div>
                    <div className="my-4 my-lg-2">
                        <div className="ap-label">
                            I can verify that I have these certification(s)
                        </div>
                        <NbCheckbox
                            className="nb-text__sm"
                            label="Executive Coach Certification"
                        />
                        <NbCheckbox
                            label="Career Coach Certification"
                        />
                        <NbCheckbox
                            label="Life Coach Certification"
                        />
                        <NbCheckbox
                            label="Business Coach Certification"
                        />
                    </div>
                </div>
                <div className="text-center my-2 mt-lg-3">
                    <button className="btn bgc-primary" onClick={() => navigate('/coach/create/step_2')}>
                        Save & Continue
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CoachCreate1
