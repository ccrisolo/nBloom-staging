import BackgroundImage from '../Components/BackgroundImage'
import BottomNavigation from '../Components/BottomNavigation'
import Card from '../Components/Card'

function HomePage() {
    return (
        <div className="position-relativeb">
            <BottomNavigation />
            <BackgroundImage />
            {/* <Header context="dashboard" /> */}
            <div className="container-fluid mx-0">
                <div className="container-xl px-0">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default HomePage
