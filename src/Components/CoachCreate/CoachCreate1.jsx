import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ToggleButton from 'react-toggle-button'

import TextInput from '../TextInput'
import NbSelect from '../NbSelect'
import NbCheckbox from '../NbCheckbox'

function CoachCreate1() {
    const navigate = useNavigate()
    const [takingClients, setTakingClients] = useState(false)
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="nb-heading">
                    Create a coach profile
                </div>
                <div className="nb-text__sm">
                    Section 1 of 4
                </div>
            </div>
            <div className="nb-">
                Tell Us About Your Self
            </div>
            <div>
                <div className="col-12 col-xl-11 col-lg-10">
                    <div className="position-relative my-5">
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
                        <div className="my-2 d-lg-none">Name :</div>
                        <TextInput
                            bordered={true}
                            label="Name :"
                            placeholder="Enter your name here"
                            type="text"
                        />
                    </div>
                    <div className="my-1">
                        <div className="my-2 d-lg-none">Coach Type :</div>
                        <NbSelect
                            bordered={true}
                            label="Coach Type :"
                            selectedItem={'type 1'}
                            setSelectedItem={() => { }}
                            options={['type 1', 'type 2']}
                        />
                    </div>
                    <div className="my-1">
                        <div className="my-2 d-lg-none">My rates are :</div>
                        <TextInput
                            bordered={true}
                            label="My rates are :"
                            placeholder="Enter your rate here"
                            type="number"
                        />
                    </div>
                    <div className="my-3 d-flex justify-content-between">
                        <div className="">
                            Taking Clients ?
                    </div>
                        <div className=" me-3">
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
                                onToggle={(value) => setTakingClients(!takingClients)} />
                        </div>
                    </div>
                    <div className="my-2">
                        <div>
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
