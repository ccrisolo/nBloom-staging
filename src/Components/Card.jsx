import ForwardIcon from '../assets/forward.svg'
import UserImage from '../assets/userImage.svg'
import AudioPlayer from './AudioPlayer'
import MessageIcon from "../assets/message_b.svg";
import ShareIcon from "../assets/share.svg";

function Card() {
    return (
        <div className="hp-card position-relative shadow p-lg-5 px-2 py-3 w-100 bg-white my-4 br">
            <div className="d-lg-none position-absolute" style={{ top: 10, right: 20 }}>
                <img className="mx-2" src={MessageIcon} alt="" />
                <img src={ShareIcon} alt="" />
            </div>
            <div className="d-flex justify-content-between w-100 mt-3 mt-lg-0">
                <div className="row">
                    <div className="col-4 col-lg-3">
                        <img className="w-100 h-100" src={UserImage} alt="" />
                    </div>
                    <div className="col-8 text-left px-0">
                        <div className="row text-start my-3">
                            <div className="hp-card__name align-items-start">
                                Martha Mendes
                        </div>
                            <div className="hp-card__desc align-items-center">
                                <div>Professional Title</div>
                                <div>Seeking A Management Coach</div>
                                Coaching Certifications A Plus
                        </div>
                            <div className="align-items-end mt-5 d-none d-lg-inline-block">
                                <AudioPlayer className="px-3 py-2" currentTime="3:12" maxTime="5:30" style={{ fontSize: 20 }} />
                                <button className="ms-5 btn" style={{ background: "#3E3E70",color:'#fff' }}>Create a Coachee Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-inline-block">
                    <img src={ForwardIcon} alt="" />
                </div>
            </div>
            <div className="justify-content-between d-flex">
                <AudioPlayer className="my-auto d-lg-none" currentTime="3:12" maxTime="5:30" style={{ fontSize: 11, height: 24, width: 91, lineHeight: 2.5 }} />
                <button className="mx-1 btn btn-outline d-none d-lg-inline-block" style={{width:250}}>Message</button>
                <button className="btn d-lg-none" style={{ fontSize:12, height: 34, background: "#3E3E70" ,color:'#fff'}}>Create a Coachee Profile</button>
            </div>
            <div className="ms-lg-2 text-start my-3 hp-card__topic__cotent">
                <span className="hp-card__topic">Purpose :</span> My purpose is
            </div>
            <div className="ms-lg-2 text-start my-3 hp-card__topic__cotent">
                <span className="hp-card__topic">Growth areas to focus on : </span> Creativity and leave feedback
            </div>
        </div>
    )
}

export default Card
