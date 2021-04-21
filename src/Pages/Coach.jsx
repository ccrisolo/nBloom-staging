import { useNavigate } from 'react-router-dom'
import ExcitedImage from '../assets/excited.svg'

function CoachProfile(p) {
    const navigate = useNavigate()
    console.log(p)
    return (
        <div className="container-fluid">
            <div className="container-xl px-0 text-center">
                <div className="d-flex justify-content-between">
                    <button
                        style={{ color: '#6666FF' }}
                        className="btn btn-rounded shadow mt-3 px-3 h-100 py-auto d-none d-lg-block"
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
                <div>
                    <div className="nb-heading__sub text-start text-lg-center">
                        <div>
                            Great!
                        </div>
                        <div className="my-2">
                            So Excited to Have You!
                        </div>
                    </div>
                    <div className="my-5">
                        <img className="img-fluid" src={ExcitedImage} alt="" />
                    </div>
                    <div className="text-center nb-text__bold">
                        Ready to create coach profile ?
                    </div>
                    <div className="row justify-content-center my-lg-5 py-lg-1 py-3">
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
                            >
                                Not yet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachProfile
