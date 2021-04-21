import BG from '../assets/bg.svg'

function BackgroundImage() {
    return (
        <div className="position-absolute" style={{ top: 50, left: -120, zIndex: -100, height: 'fit-content' }}>
            <img src={BG} className="w-100 h-100" />
        </div>)
}

export default BackgroundImage
