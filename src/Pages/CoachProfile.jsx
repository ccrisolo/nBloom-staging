import ExcitedImage from '../assets/excited.svg'

function CoachProfile({ history }) {

    return (
        <div className="container-fluid px-0">
            <div className="container-xl px-0 text-center">
                <div className="d-flex justify-content-between">
                    <button
                        style={{ color: '#6666FF' }}
                        className="btn btn-rounded shadow my-3 px-3"
                        onClick={() => history.push('/')}
                    >
                        Back
                    </button>
                </div>
                <div>
                    <div className="fw-bold my-3">
                        Great! <br />
                        So Excited to Have You!
                    </div>
                    <img src={ExcitedImage} alt="" />
                    <div className="col-12 my-5 text-center">
                        <button
                            onClick={() => history.push('/coach/create')}
                            className="btn w-25 py-2" style={{ background: '#EB90A2', textTransform: 'unset' }}>Yes</button>
                    </div>
                    <div className="col-12 my-5 text-center">
                        <button className="btn w-25 py-2" style={{ background: '#C5ADEE', textTransform: 'unset' }}>Not yet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachProfile
