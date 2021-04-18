import Logo from '../assets/logo.svg'
import NewsIcon from '../assets/news.svg'
import MsgIcon from '../assets/message.svg'
import UserIcon from '../assets/user.svg'

function Header() {
    return (
        <div className="container-fluid px-0 shadow bg-white">
            <div className="container-xl">
                <div className="d-flex justify-content-between">
                    <div className="cp">
                        <img src={Logo} className="w-100 h-100"/>
                    </div>
                    <div className="w-50 my-auto">
                        <TextInputWithIcon />
                    </div>
                    <div className="my-auto">
                        <img className="mx-2 cp" src={NewsIcon} alt=""/>
                        <img className="mx-2 cp" src={MsgIcon} alt=""/>
                        <img className="mx-2 cp" src={UserIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


const TextInputWithIcon = () => {
    const style = {
        outline:{
            padding: 5,
            width: "100%",
            border: "1px solid var(--nb_primary__light)",
            borderRadius: "8px",
            height: 50,
        },
        input: {
            border: "none",
            width: "90%",
            height: "100%",
            margin: "0px 5px",
            outline: "none",
        },
        icon: {
            width: '10%',
            color:'var(--nb_primary__light)'
        }
    }
    return (
        <form>
            <div style={style.outline}>
                <span className="text-center mx-2" style={style.icon}>{
                    <i class="fas fa-search"></i>
                }</span>
                <input type="search" style={style.input} />
            </div>
        </form>)
}