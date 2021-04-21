import React from 'react'
import BackgroundImage from '../Components/BackgroundImage'
import CoachProfileCard from '../Components/CoachProfile/CoachProfileCard'
import User from '../assets/userImage.svg'

function CoachProfile() {
    return (
        <div className="" style={{ minHeight: 'fit-content', maxHeight: 'fit-content' }}>
            <div className="d-none d-lg-block">
                <BackgroundImage />
            </div>
            <div className="container-fluid px-0">
                <div className="container-xl">
                    <CoachProfileCard
                        name="Martha Mendes"
                        profileDescription={['Life Coach', 'Accepting Clients', '$100 / hr']}
                        purpose="lorem ipsum is the dummy content used for mock data in webapp development"
                        certification="lorem ipsum is the dummy content used for mock data in webapp development"
                        image={User}
                        specialities="lorem ipsum"
                        socials={['a', 'b', 'c']}
                    />
                </div>
            </div>
        </div>
    )
}

export default CoachProfile
