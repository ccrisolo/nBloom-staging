import BackgroundImage from '../Components/BackgroundImage'
import Card from '../Components/Card'

function HomePage() {
    return (
        <div className="w-100 position-relativeb">
            <BackgroundImage />
            {/* <Header context="dashboard" /> */}
            <div className="container-fluid">
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
