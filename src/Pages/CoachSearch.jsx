import UserImage from '../assets/userImage.svg'
import MessageIcon from '../assets/message.svg'
import BottomNavigation from '../Components/BottomNavigation'

function CoachSearch() {
    const style = {
        search: {
            // width:'90%'
        },
        outline: {
            borderRadius: 10,
            background: '#d7d7d7',
            width: '75%'
        },
        input: {
            width: '90%',
            borderRadius: 10,
            outline: 'none',
            border: 'none',
            background: 'transparent',
            height: '36px'
        }
    }
    return (
        <div>
            <div className="container-fluid px-1 d-lg-none">
                <div className="container-xl">
                    <div className="d-lg-none">
                        <div className="ap-title my-4">
                            Seach
                        </div>
                        <div className="d-flex justify-content-between" style={style.search}>
                            <div className="d-flex justify-content-between" style={style.outline}>
                                <div className="my-auto mx-2">
                                    <i className="fa fa-search"> </i>
                                </div>
                                <input type="text" placeholder="Search for a coach" style={style.input} />
                            </div>
                            <div className="text-primary">
                                Search
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-4 mb-1" />
                <div className="nb-text__sm ms-3">
                    6 results for searching Wanda.
                </div>
                <div>
                    <CoachSearchCard
                        name="Wanda Miller"
                        title="Life Coach"
                    />
                     <CoachSearchCard
                        name="Wanda Miller"
                        title="Life Coach"
                    />
                     <CoachSearchCard
                        name="Wanda Miller"
                        title="Life Coach"
                    />
                     <CoachSearchCard
                        name="Wanda Miller"
                        title="Life Coach"
                    />
                     <CoachSearchCard
                        name="Wanda Miller"
                        title="Life Coach"
                    />
                     <CoachSearchCard
                        name="Wanda Miller"
                        title="Life Coach"
                    />
                </div>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default CoachSearch


const CoachSearchCard = ({ name, title }) => {
    return (
        <div className="d-flex br shadow justify-content-between p-1 my-2">
            <div className="d-flex">
                <div className="bp-card__image me-2">
                    <img className="w-100 h-100" src={UserImage} alt="" />
                </div>
                <div>
                    <div className="bp-card__title">
                        {name}
                    </div>
                    <div className="nb-text mt-4">
                        {title}
                    </div>
                </div>
            </div>
            <div className="my-auto me-2">
                <img  src={MessageIcon} />
            </div>
        </div>
    )
}