import React from 'react'
import BackgroundImage from '../Components/BackgroundImage'
import MessageContainer from '../Components/Message/MessageContainer'

function Message() {
    return (
        <div className="message-bg" >
            {/* <BackgroundImage style={{height:'100vh',width:'100vw',objectFit:'cover'}}/> */}
            <div className="container-fluid mx-0 px-0">
                <div className="container-xxl py-lg-5 px-0">
                    <MessageContainer />
                </div>
            </div>
        </div>
    )
}

export default Message
