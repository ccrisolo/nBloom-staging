import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ExcitedImage from '../assets/excited.svg'
import NotYetImage from '../assets/notyet.svg'
import MobileBackButton from '../Components/MobileBackButton'

function CoachProfile(p) {
    const navigate = useNavigate()
    const [notYet, setNotYet] = useState(false)
    return (
        <div className="container-fluid px-0">
            <div className="mx-2 my-4">
                <MobileBackButton
                    onClick={() => navigate(-1)}
                />
            </div>
            <div className="container-xl text-center">
                <div className="d-flex justify-content-between">
                    <button
                        style={{ color: '#6666FF' }}
                        className="btn btn-rounded shadow mt-2 px-3 h-100 py-auto d-none d-lg-block"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>
                {notYet ?
                    <div >
                        <div className="ap-desc__bold text-start text-lg-center my-3 my-lg-0">
                            <div>
                                No Worries,
                             </div>
                            <div className="my-1">
                                You Can Do It Later!!
                            </div>
                        </div>
                        <div className="my-5 my-lg-3">
                            <img className="img-fluid" src={NotYetImage} alt="" />
                        </div>
                        <div className="text-center ap-desc__bold my-3 my-lg-2">
                            Take me to...
                         </div>
                        <div className="row justify-content-center mt-lg-3">
                            <div className="col-12 col-lg-4">
                                <button
                                    onClick={() => navigate('/')}
                                    className="btn w-100 my-2" style={{ background: '#EB90A2' }}
                                >
                                    My Dashboard
                                 </button>
                                <button
                                    className="btn w-100 my-4 my-lg-2"
                                    style={{ background: '#C5ADEE', }}
                                    onClick={() => navigate('/')}
                                >
                                    Browse Coachees
                            </button>
                            </div>
                        </div>
                    </div>
                    : <div >
                        <div className="ap-desc__bold text-start text-lg-center my-3 my-lg-0">
                            <div>
                                Great!
                            </div>
                            <div className="my-1">
                                So Excited to Have You!
                        </div>
                        </div>
                        <div className="my-">
                            <img className="img-fluid" src={ExcitedImage} alt="" />
                        </div>
                        <div className="text-center ap-desc__bold my-3 my-lg-4">
                            Ready to create coach profile ?
                    </div>
                        <div className="row justify-content-center mt-lg-3">
                            <div className="col-12 col-lg-4">
                                <button
                                    onClick={() => navigate('/coach/create/step_1')}
                                    className="btn w-100 my-2" style={{ background: '#EB90A2' }}
                                >
                                    Yes
                            </button>
                                <button
                                    className="btn w-100 my-4 my-lg-2"
                                    style={{ background: '#C5ADEE', }}
                                    onClick={() => setNotYet(true)}
                                >
                                    Not yet
                            </button>
                            </div>
                        </div>
                    </div>}
            </div>
        </div >
    )
}

export default CoachProfile
