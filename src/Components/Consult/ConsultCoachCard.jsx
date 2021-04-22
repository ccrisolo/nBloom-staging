import ShareIcon from '../../assets/share.svg'
import AudioPlayer from '../AudioPlayer'
import { ReactComponent as InstaIcon } from '../../assets/insta.svg'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as FolderIcon } from '../../assets/folder.svg'
import MessageIcon from '../../assets/message_b.svg'
import { ReactComponent as BadgeIcon } from '../../assets/badge.svg'

function ConsultCoachCard({
    image,
    name,
    profileDescription = [],
    purpose,
    specialities,
    certificaions,
    cost
}) {
    return (
        <div className="br-lg p-3 position-relative" style={{ background: '#F1F0FE' }}>
            <div className="position-absolute" style={{ top: 20, right: 20 }}>
                <img className="w-100" src={ShareIcon} alt="" />
            </div>
            <div className="row">
                <div className="col-4 col-lg-4">
                    <img className="w-100" src={image} alt="Coach Image" />
                </div>
                <div className="col-6 col-lg-8 nb-text__sm">
                    <div className="nb-text__bold__sm position-relative d-inline-block">
                        <div>{name}</div>
                        <div className="position-absolute" style={{ top: 0, right: -30 }}>
                            <BadgeIcon />
                        </div>
                    </div>
                    {profileDescription?.map((pd, i) => <div key={i}>{pd}</div>)}
                    <div className="mt-3">
                        ${cost}/hr
                    </div>
                </div>
            </div>
            <div className="row justify-content-between my-3">
                <div className="col-5 col-lg-4 py-auto">
                    <AudioPlayer
                        currentTime="3:12"
                        maxTime="5:59"
                        style={{ width: '100%', fontSize: 16 }}
                    />
                </div>
                <div className="text-end col-6 col-lg-2 order-lg-last">
                    <img src={MessageIcon} alt="" />
                </div>
                <div className="col-12 col-lg-6">
                    {/* <img src={InstaIcon} alt="InstaIcon" /> */}
                    <InstaIcon className="mx-2 " fill="#3E3E70" width="40px" height="40px" />
                    <div className="my-auto d-inline-block">
                        <i class="fab fa-linkedin" style={{ color: '#3E3E70', fontSize: 30, verticalAlign: 'middle' }}></i>
                    </div>
                    <FolderIcon fill="#3E3E70" className="mx-2" width="40px" height="40px" />
                </div>
            </div>
            <div className="my-3 mt-lg-5">
                <div className="nb-text__bold">
                    Purpose :
                </div>
                <div>
                    {purpose}
                </div>
            </div>
            <div className="my-3">
                <div className="nb-text__bold">
                    Specialties :
                </div>
                <div className="text-break">
                    {specialities}
                </div>
            </div>
            <div className="my-3">
                <div className="nb-text__bold">
                    Certifications :
                </div>
                <div>
                    {certificaions}
                </div>
            </div>
        </div>
    )
}

export default ConsultCoachCard
