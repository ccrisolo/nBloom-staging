import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'

import Card from '../../assets/card.svg'
import MobileBackButton from '../MobileBackButton'

function CoachCreate4() {
    const [showCard, setShowCard] = useState(false)
    const navigate = useNavigate()
    return (
        <div>
            <div className="d-lg-none mt-3">
                <MobileBackButton onClick={() => navigate(-1)} />
                <div className="ap-heading my-2 my-lg-5">
                    Create Profile
                </div>
                <div className="step-text mt-3">
                    Section 4 of 4
                </div>
            </div>
            <div className="ap-desc__bold my-1 mb-4     my-lg-5">
                Start Booking Clients
            </div>
            <div>
                <div className="col-12 col-xl-11 col-lg-10">
                    <div>
                        <div className="my-2 d-lg-none ap-desc__bold">Add Calendar For Consults: </div>
                        <TextInput
                            label="Add Calendar For Consults: "
                            placeholder="My calendly link"
                            value="asd"
                            type="date"
                            bordered={true}
                        />
                    </div>
                    <div className="my-lg-5 my-3">
                        <div className="my-2 ap-desc__bold">Ready To Set Up Your Payment Info?</div>
                        <div
                            onClick={() => setShowCard(!showCard)}
                            className="cp d-flex justify-content-between w-100 px-2 py-2 br my-2 nb-text__sm shadow-lg " style={{ border: '2px solid var(--nb_primary__light)' }}>
                            <div className="my-auto">
                                Add Payment Info to Start Booking
                            </div>
                            <img src={Card} alt="" />
                        </div>
                    </div>
                    {showCard && <div className="my-lg-5 my-2">
                        <div
                            className="cp w-100 p-3 br my-2 nb-text__xs" style={{ border: '2px solid var(--nb_primary__light)' }}>
                            <div>
                                <div className="my-2 d-lg-none">Name On Card* : </div>
                                <TextInput
                                    label="Name On Card* :"
                                    placeholder="your name on the card"
                                    type="text"
                                    bordered={true}
                                />
                            </div>
                            <div>
                                <div className="my-2 d-lg-none">Card Number* : </div>
                                <TextInput
                                    label="Card Number* :"
                                    placeholder="0000 00000 0000 0000"
                                    type="number"
                                    bordered={true}
                                />
                            </div>
                            <div className="d-flex my-2">
                                <div>
                                    <div className="my-2 d-lg-none">Expiry Date* : </div>
                                    <TextInput
                                        label="Expiry Date* :"
                                        placeholder="DD/YY"
                                        type="number"
                                        bordered={true}
                                    />
                                </div>
                                <div className="ms-3">
                                    <div className="my-2 d-lg-none">cvv* : </div>
                                    <PasswordInput
                                        label="cvv* :"
                                        placeholder="****"
                                        type="number"
                                        bordered={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>
                <div className="text-center my-2 mt-lg-5 py-lg-5">
                    <button className="btn bgc-primary" onClick={() => navigate('/coach/profile')}>
                        Save & Continue
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CoachCreate4
