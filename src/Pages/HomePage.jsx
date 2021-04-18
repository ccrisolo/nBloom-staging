import React from 'react'
import Header from '../Components/Header'
import BG from '../assets/bg.svg'
import Card from '../Components/Card'
function HomePage() {
    return (
        <div className="w-100 position-relative">
            <BackgroundImage />
            <Header context="dashboard" />
            <div className="container-fluid">
                <div className="container-xl">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default HomePage


const BackgroundImage = () => {
    return (
        <div className="position-absolute" style={{ top: 50, left: -120, zIndex: -100, height: 'fit-content' }}>
            <img src={BG} className="w-100 h-100" />
        </div>)
}