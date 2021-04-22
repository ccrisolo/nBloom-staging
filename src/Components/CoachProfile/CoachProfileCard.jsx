import { Accordion } from 'react-bootstrap'

import AudioPlayer from '../AudioPlayer'
import YoutubeRed from '../../assets/youtube_r.svg'
import InstaRed from '../../assets/insta_r.svg'
import LinkedInRed from '../../assets/linkedin_r.svg'
import UserBlue from '../../assets/user_b.svg'
import MessageBlue from '../../assets/message_b.svg'
import CopyLink from '../../assets/copylink.svg'
import EditIcon from '../../assets/edit.svg'

function CoachProfileCard({
    name,
    profileDescription,
    purpose,
    certification,
    image,
    specialities,
    socials
}) {
    return (
        <div className="shadow-lg p-lg-5 w-100 bg-white my-lg-4 br" >
            <div className="d-flex  my-3 justify-content-between d-lg-none">
                <div className="nb-heading">
                    Profile
                </div>
                <div>
                    <img className="d-block" src={EditIcon} alt="Coach Profile" />
                    {/* <img className="d-block mt-2" src={CopyLink} alt="Coach Profile" /> */}
                </div>
            </div>
            <div className="row justify-content-between w-100">
                <div className="col-4 col-lg-2">
                    <img className="h-100 w-100" src={image} alt="Coach Profile" />
                </div>
                <div className="col px-0">
                    <div className="row text-start ms-lg-2 w-100">
                        <div className="align-items-start">
                            <div className="d-flex justify-content-lg-start justify-content-between p-0 m-0">
                                <div className="nb-text__bold">{name}</div>
                                <div className="d-none d-lg-block">
                                    <button
                                        className="btn nb-text__sm btn-outline__dark h-100 p-1 mx-4 ms-5"
                                        style={{ fontSize: 12, height: 20 }}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                                <img className="ms-5" src={CopyLink} alt="Link Icon" />
                            </div>
                        </div>
                        <div className="align-items-center">
                            {
                                profileDescription.map((pd, i) => <div className="nb-text__sm" key={i}>{pd}</div>)
                            }
                        </div>
                        <div className="align-items-end d-none d-lg-block mt-3">
                            <AudioPlayer currentTime="3:12" maxTime="5:30" style={{ width: '25%', height: 40, fontSize: 18 }} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" d-lg-none">
                    <AudioPlayer currentTime="3:12" maxTime="5:30" style={{ width: '40%', height: 40, fontSize: 16 }} />
                </div>
                <img className="mx-2 my-3" src={MessageBlue} alt="" />
                <img className="mx-2" src={UserBlue} alt="" />
            </div>
            <div className="row justify-content-between gx-3 my-0">
                <div className="col-12 col-lg-4">
                    <div className="my-2">
                        <Accordion bsPrefix="">
                            <div className="shadow p-2 py-3 br">
                                <Accordion.Toggle as="div" eventKey="0">
                                    <div className="d-flex justify-content-between nb-text__bold w-100 cp">
                                        <div>
                                            Purpose :
                                        </div>
                                        <div className="fa fa-chevron-down my-auto mx-2" />
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="nb-text__sm">{purpose}</div>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </div>
                    <div className="my-2">
                        <Accordion bsPrefix="">
                            <div className="shadow p-2 py-3 br">
                                <Accordion.Toggle as="div" eventKey="0">
                                    <div className="d-flex justify-content-between nb-text__bold w-100 cp">
                                        <div>
                                            Ceritifications :
                                        </div>
                                        <div className="fa fa-chevron-down my-auto mx-2" />
                                    </div>
                                    <div className="nb-text__bold w-100 cp">
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="nb-text__sm">{certification}</div>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="my-2">
                        <Accordion bsPrefix="">
                            <div className="shadow p-2 py-3 br">
                                <Accordion.Toggle as="div" eventKey="0">
                                    <div className="d-flex justify-content-between nb-text__bold w-100 cp">
                                        <div>
                                            Specialties :
                                        </div>
                                        <div className="fa fa-chevron-down my-auto mx-2" />
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="nb-text__sm">{specialities}</div>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="my-2">
                        <Accordion bsPrefix="">
                            <div className="shadow p-2 py-3 br">
                                <Accordion.Toggle as="div" eventKey="0">
                                    <div className="d-flex justify-content-between nb-text__bold w-100 cp">
                                        <div>
                                            Socials :
                                        </div>
                                        <div className="fa fa-chevron-down my-auto mx-2" />
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="nb-text__sm">
                                        <div>
                                            <img src={InstaRed} alt="" /> @{socials[0]}
                                        </div>
                                        <div>
                                            <img src={LinkedInRed} alt="" /> @{socials[0]}
                                        </div>
                                        <div>
                                            <img src={YoutubeRed} alt="" /> @{socials[0]}
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachProfileCard
