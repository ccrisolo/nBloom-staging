import { useState } from 'react'

function AudioPlayer({ maxTime, currentTime, style, className }) {
    const [togglePlay, setTogglePlay] = useState(false)
    return (
        <div className={`br-sm d-inline-block shadow ${className}`} style = { style } >
            <div className="d-flex justify-content-between">
                <div className="cp nb-text-primary mx-2" onClick={() => setTogglePlay(!togglePlay)}>
                    {togglePlay ?
                        <i class="fas fa-pause"></i>
                        : <i class="fas fa-play"></i>}
                </div>
                <div className="text-center w-100 nb-text-primary">
                    {currentTime}/{maxTime}
                </div>
            </div>
        </div >
    )
}

export default AudioPlayer
