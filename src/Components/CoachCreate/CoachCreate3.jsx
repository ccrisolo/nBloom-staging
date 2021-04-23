import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


import TextInput from '../TextInput'
import TextArea from '../TextArea'
import NbSelect from '../NbSelect'
import NbCheckbox from '../NbCheckbox'
import TextInputWithIcon from '../TextInputWithIcon'

import LinkedIn_S from '../../assets/linkedin_s.svg'
import YouTUbe_S from '../../assets/youtube_s.svg'
import Insta_S from '../../assets/insta_s.svg'

import LinkedIn from '../../assets/linkedin.svg'
import YouTUbe from '../../assets/youtube.svg'
import Insta from '../../assets/insta.svg'
import MobileBackButton from '../MobileBackButton'

function CoachCreate3() {
    const navigate = useNavigate()
    const [currentIcon, setCurrentIcon] = useState('Instagram')
    const [youtubeLink, setYoutubeLink] = useState("")
    const [instaLint, setInstaLint] = useState("")
    const [linkedInLink, setLinkedInLink] = useState("")
    return (
        <div>
            <div className="d-lg-none mt-3">
                <MobileBackButton onClick={() => navigate(-1)} />
                <div className="ap-heading my-2 my-lg-5">
                    Create Profile
                </div>
                <div className="step-text mt-3">
                    Section 3 of 4
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
                    Section 3 of 4
                </div>
            </div>
            <div className="ap-desc__bold my-1 my-lg-5">
                Be Social
            </div>
            <div className="my-2 mt-5  ap-desc__bold">Connect Your Socials & Calendar</div>
            <div className="row  d-none d-lg-block">
                <div className="col-12 col-xl-11 col-lg-10">
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
            </div>

            <div className="d-lg-none">
                <div className="my-3 position-relative">
                    <img onClick={() => setCurrentIcon('Instagram')} className="mx-3" src={Insta_S} alt="" style={{ height: 50, width: 50 }} />
                    <img onClick={() => setCurrentIcon('Linkedin')} className="mx-3" src={LinkedIn_S} alt="" style={{ height: 50, width: 50 }} />
                    <img onClick={() => setCurrentIcon('Youtube')} className="mx-3" src={YouTUbe_S} alt="" style={{ height: 50, width: 50 }} />
                    <div
                        className="position-absolute"
                        style={{
                            bottom: -12,
                            left: currentIcon === "Youtube" ? 200 : currentIcon === "Linkedin" ? 115 : 35,
                            width: 10, height: 10, background: '#FDBA13', borderRadius: 50
                        }} />
                </div>
                <div className="shadow br-lg" style={{ height: 104, width: 257, background: '' }}>
                    <div className="shadow p-2 px-3" style={{ fontSize: 13 }}>
                        <img
                            src={
                                currentIcon === "Linkedin" ? LinkedIn
                                    : currentIcon === "Insta" ? Insta : YouTUbe
                            }
                            style={{ width: 28, height: 28 }}
                        />
                        <span className="mx-2">Connect your {currentIcon}</span>
                    </div>
                    <div className="p-2 px-3">
                        <TextInput__
                            value={currentIcon === "Linkedin" ? linkedInLink
                                : currentIcon === "Instagram" ? instaLint : youtubeLink}
                            onInput={(e) => currentIcon === "Linkedin" ? setLinkedInLink(e.target.value)
                                : currentIcon === "Instagram" ? setInstaLint(e.target.value) : setYoutubeLink(e.target.value)}
                            placeholder={`Your ${currentIcon} url`}
                        />
                    </div>
                </div>

            </div>
            <div className="text-center my-5 mt-lg-5 py-lg-5">
                <button className="btn bgc-primary" onClick={() => navigate('/coach/create/step_4')}>
                    Save & Continue
                </button>
            </div>
        </div>
    )
}

export default CoachCreate3

function TextInput__(props) {
    const style = {
        outline2: {
            padding: 0,
            width: "90%",
            border: "2px solid var(--nb_primary__light)",
            borderRadius: "10px",
        },
        input: {
            border: "none",
            width: "100%",
            borderRadius: "5px",
            outline: "none",
            height: 25
        },
        label: {
            fontSize: 18
        }
    }
    return (
        <div className="px-2 shadow-sm" style={style.outline2}>
            <input style={style.input} {...props} />
        </div>
    )
}