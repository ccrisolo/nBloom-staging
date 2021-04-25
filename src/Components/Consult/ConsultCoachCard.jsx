import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ShareIcon from '../../assets/share.svg'
import AudioPlayer from '../AudioPlayer'
import { ReactComponent as InstaIcon } from '../../assets/insta.svg'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as FolderIcon } from '../../assets/folder.svg'
import MessageIcon from '../../assets/message_b.svg'
import { ReactComponent as BadgeIcon } from '../../assets/badge.svg'
import { ReactComponent as CalenderIcon } from '../../assets/calender_wt.svg'
import { ReactComponent as BookIcon } from '../../assets/book_wt.svg'
import { ReactComponent as ThumbIcon } from '../../assets/thumbup.svg'
import { ReactComponent as ClapIcon } from '../../assets/clap.svg'
import { ReactComponent as CommentIcon } from '../../assets/comment.svg'

import IconButton from '../IconButton'
import Modal from '../Modal'

function ConsultCoachCard({
    image,
    name,
    profileDescription = [],
    purpose,
    specialities,
    certificaions,
    cost
}) {
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.auth.isAuth)
    const [showLoginModel, setShowLoginModel] = useState(false)
    return (
        <div className="br-lg p-3 position-relative" style={{ background: '#F1F0FE' }}>
            <Modal show={showLoginModel} onClose={() => setShowLoginModel(false)} >
                <div className="d-flex justify-content-between p-3">
                    <div className="nb-text">
                        You have to create an account to message, schedule consults, or book with coaches
                    </div>
                    <div className="nb-text-primary">
                        <i className="fa fa-times" onClick={() => setShowLoginModel(false)}></i>
                    </div>
                </div>
                <div className="text-center w-100 my-3">
                    <button className="btn btn-primary mx-2 px-5 " onClick={() => navigate('/auth')}>Sign Up</button>
                    <button className="btn btn-outline mx-2 px-5" onClick={() => setShowLoginModel(false)}>Cancel</button>
                </div>
            </Modal>
            <div className="position-absolute" style={{ top: 20, right: 20 }}>
                <img className="w-100" src={ShareIcon} alt="" />
            </div>
            <div className="row">
                <div className="col-4 col-lg-4">
                    <img className="w-100" src={image} alt="Coach Image" />
                </div>
                <div className="col-6 col-lg-8 nb-text__sm">
                    <div className="nb-text__bold__sm position-relative d-inline-block">
                        <div className="bc-name">{name}</div>
                        <div className="position-absolute" style={{ top: 0, right: -30 }}>
                            <BadgeIcon />
                        </div>
                    </div>
                    {profileDescription?.map((pd, i) => <div className="bc-desc" key={i}>{pd}</div>)}
                    <div className="mt-3 bc-desc">
                        ${cost}/hr
                    </div>
                </div>
            </div>
            <div className="row justify-content-between my-3">
                <div className="col-5 col-lg-4 py-auto">
                    <AudioPlayer
                        currentTime="3:12"
                        maxTime="5:59"
                        className="py-2"
                        style={{ width: '100%', fontSize: 14, borderRadius: 12 }}
                    />
                </div>
                <div className="text-end col-6 col-lg-2 order-lg-last">
                    <img src={MessageIcon} alt="" />
                </div>
                <div className="col-12 col-lg-6 my-3 my-lg-0">
                    {/* <img src={InstaIcon} alt="InstaIcon" /> */}
                    <InstaIcon className="mx-2 " fill="#3E3E70" width="40px" height="40px" />
                    <div className="my-auto d-inline-block">
                        <i class="fab fa-linkedin" style={{ color: '#3E3E70', fontSize: 30, verticalAlign: 'middle' }}></i>
                    </div>
                    <FolderIcon fill="#3E3E70" className="mx-2" width="40px" height="40px" />
                </div>
            </div>
            <div className="my-3 mt-lg-4">
                <div className="bc-topic">
                    Purpose :
                </div>
                <div className="bc-topic__content">
                    {purpose}
                </div>
            </div>
            <div className="my-3">
                <div className="bc-topic">
                    Specialties :
                </div>
                <div className="bc-topic__content          text-break">
                    {specialities}
                </div>
            </div>
            <div className="my-3">
                <div className="bc-topic">
                    Certifications :
                </div>
                <div className="bc-topic__content">
                    {certificaions}
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-12 col-lg-6">
                    <div className="d-inline-block me-2">
                        <CalenderIcon 
                        className="cp"
                        onClick={() => {
                            if (isAuth)
                                console.log('')
                            else
                                setShowLoginModel(true)
                        }} />
                    </div>
                    <div className="d-inline-block mx-3">
                        <BookIcon
                            className="cp"
                            onClick={() => {
                                if (isAuth)
                                    console.log('')
                                else
                                    setShowLoginModel(true)
                            }}
                        />
                    </div>
                </div>
                <div className="col-12 col-lg-6 mt-3 my-lg-0 mt-lg-3" >
                    <div className="d-flex justify-content-between" style={{ height: 'fit-content' }}>
                        <IconButton icon={<ThumbIcon width="30" height="25" />} label="1" />
                        <IconButton icon={<ClapIcon width="30" height="25" />} label="32" />
                        <IconButton icon={<CommentIcon width="30" height="25" />} label="24" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ConsultCoachCard
