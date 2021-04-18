import {useState} from 'react'

function AudioPlayer({ maxTime, currentTime }) {
    const [togglePlay, setTogglePlay] = useState(false)
    return (
        <div className="br-sm d-inline-block shadow py-2 mx-1 p-1" style={{width:'200px'}}>
            <div className="d-flex justify-content-between">
                <div className="cp nb-text-primary mx-2" onClick={()=>setTogglePlay(!togglePlay)}>
                    {togglePlay ?
                        <i class="fas fa-pause"></i>
                        : <i class="fas fa-play"></i>}
                </div>
                <div className="text-center w-100 nb-text-primary">
                    {currentTime}/{maxTime}
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer