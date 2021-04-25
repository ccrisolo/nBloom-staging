import BottomNavigation from '../BottomNavigation'
import UserIcon from '../../assets/userImage.svg'
import MessageIcon from '../../assets/message.svg'
import PlusIcon from '../../assets/plus.svg'

function MessageContainer() {
    return (
        <div className="mp-card bg-white br-lg shadow-lg p-lg-2">
            <div className="row g-0">
                <div className="mp-card__left col-12 col-lg-4 px-lg-1 px-3">
                    <div className="d-flex justify-content-between d-lg-none  my-4">
                        <div className="ap-title">
                            Chat
                        </div>
                        <div>
                            <img src={PlusIcon} alt=""/>
                        </div>
                        <BottomNavigation />
                    </div>
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}
                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                    <MessageUser
                        avatar={UserIcon}

                        name="Sue Caldwell"
                        message="Sounds good to me!"
                        lastMessageTime="04:04 PM"
                    />
                </div>
                <div className="mp-message__right col-12 col-lg-8 d-none d-lg-block" style={{ height: '78vh', overflowY: 'scroll' }}>
                    <div className="h-100 w-100 text-center">
                        <div className="my-auto">
                            <img className="mt-5 pt-5" src={MessageIcon} alt="Message Icon" width="300px" />
                            <div>
                                Your Message
                            </div>

                            <button className="btn btn-primary my-3 px-5">Send A Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageContainer

const MessageUser = ({ name, message, avatar, lastMessageTime }) => {
    return (
        <div>
            <div className="d-flex justify-content-between py-2">
                <div className="d-flex">
                    <div className="d-inline-block" style={{ height: 72, width: 72, borderRadius: '50%', overflow: 'hidden' }}>
                        <img className="w-200 h-100" src={avatar} alt={`${name}'s avatar`} />
                    </div>
                    <div className="d-inline-block align-self-start">
                        <div className="mp-user__name align-self-center">
                            {name}
                        </div>
                        {/* <div className="my-auto"></div> */}
                        <div className="mp-user__message">
                            {message}
                        </div>
                    </div>
                </div>
                <div className="mp-user__time">
                    {lastMessageTime}
                </div>
            </div>
            {/* <div className="ms-3 m-0 p-0"> */}
            <hr className="ms-5 m-0 p-0" />
            {/* </div> */}
        </div>)
}