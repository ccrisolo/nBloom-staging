import React from 'react'
import Header from '../Components/Header'
import BG from '../assets/bg.svg'
import Card from '../Components/Card'
function HomePage() {
    return (
        <div className="w-100">
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
