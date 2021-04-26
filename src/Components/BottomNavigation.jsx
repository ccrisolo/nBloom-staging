import { useNavigate } from 'react-router-dom'
import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/search.svg'
import BlogIcon from '../assets/blog.svg'
import MessagesIcon from '../assets/messages.svg'
import ProfileIcon from '../assets/profile.svg'

function BottomNavigation() {
    const navigate=useNavigate();
    return (
        <div className="d-lg-none position-fixed w-100 p-2" style={{ zIndex: 9999, bottom: 0, left: 0, background: '#F8F8F8' }}>
            <div className="d-flex justify-content-around">
                <div onClick={()=>navigate('/')}>
                    <img src={HomeIcon} alt="" />
                </div>
                <div  onClick={()=>navigate('/search')}>
                    <img src={SearchIcon} alt="" />
                </div>
                <div  onClick={()=>navigate('/blog')}>
                    <img src={BlogIcon} alt="" />
                </div>
                <div  onClick={()=>navigate('/message')}>
                    <img src={MessagesIcon} alt="" />
                </div>
                <div  onClick={()=>navigate('/coach/profile')}>
                    <img src={ProfileIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BottomNavigation
