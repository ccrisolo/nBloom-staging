import ShareIcon from '../assets/forward.svg'
import UserImage from '../assets/userImage.svg'
import AudioPlayer from './AudioPlayer'

function Card() {
    return (
        <div className="shadow p-5 w-100 bg-white my-4 br" style={{ height: '500px' }}>
            <div className="d-flex justify-content-between w-100">
                <div className="d-flex">
                    <div>
                        <img src={UserImage} alt="" />
                        <button className="btn btn-outline w-75">Message</button>
                    </div>
                    <div className="row text-start my-3">
                        <div className="fw-bold align-items-start">
                            Martha Mendes
                        </div>
                        <div className="align-items-center">
                            <div>Professional Title</div>
                            <div>Seeking A Management Coach</div>
                            Coaching Certifications A Plus
                        </div>
                        <div className="align-items-end mt-5">
                            <AudioPlayer currentTime="3:12" maxTime="5:30" />
                            <button className="ms-5 btn btn-primary">Create a Coachee Profile</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={ShareIcon} alt="" />
                </div>
            </div>
            <div className="ms-5 text-start my-3">
                <span className="fw-bold">Purpose :</span> My purpose is
            </div>
            <div className="ms-5 text-start my-3">
                <span className="fw-bold">Growth areas to focus on : </span> Creativity and leave feedback 
            </div>
        </div>
    )
}

export default Card
