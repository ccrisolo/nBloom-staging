import React, { useState, useEffect } from 'react'
import BackgroundImage from '../Components/BackgroundImage'
import ConsultCoachCard from '../Components/Consult/ConsultCoachCard'
import UserImage from '../assets/userImage.svg'

function Consult() {
    return (
        <div className="container-fluid">
            <BackgroundImage />
            <div className="container-xl my-2 px-0">
                <div className="row gy-2 g-lg-5 justify-content-between">
                    <div className="col-12 col-lg-6">
                        <ConsultCoachCard
                            image={UserImage}
                            profileDescription={["Executive Coach", "Accepting Clients", "Open To Slide"]}
                            name="David David David"
                            purpose="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et purus efficitur, pretium orci vitae."
                            certificaions="Exec Coach Cert - Verified"
                            specialities="#this#this#this#this#this#this#this#this#this#this"
                            cost="120"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <ConsultCoachCard
                            image={UserImage}
                            profileDescription={["Executive Coach", "Accepting Clients", "Open To Slide"]}
                            name="David"
                            purpose="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et purus efficitur, pretium orci vitae."
                            certificaions="Exec Coach Cert - Verified"
                            specialities="#this#this#this#this#this#this#this#this#this#this"
                            cost="120"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <ConsultCoachCard
                            image={UserImage}
                            profileDescription={["Executive Coach", "Accepting Clients", "Open To Slide"]}
                            name="David"
                            purpose="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et purus efficitur, pretium orci vitae."
                            certificaions="Exec Coach Cert - Verified"
                            specialities="#this#this#this#this#this#this#this#this#this#this"
                            cost="120"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <ConsultCoachCard
                            image={UserImage}
                            profileDescription={["Executive Coach", "Accepting Clients", "Open To Slide"]}
                            name="David"
                            purpose="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et purus efficitur, pretium orci vitae."
                            certificaions="Exec Coach Cert - Verified"
                            specialities="#this#this#this#this#this#this#this#this#this#this"
                            cost="120"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consult
