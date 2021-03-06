import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { parseUrl } from 'query-string'

import Logo from '../assets/logo.svg'
import NewsIcon from '../assets/news.svg'
import MsgIcon from '../assets/message.svg'
import UserIcon from '../assets/user.svg'


function Header({ context }) {
    const h = useNavigate()
    const isAuth = useSelector(state => state.auth.isAuth)
    return (
        <div className="container-fluid px-0 shadow bg-light" style={{ height: 60, position: 'fixed', zIndex: 1 }}>
            <div className="container-xl">
                <div className="d-flex justify-content-between">
                    <div className="cp" style={{ width: '120px', height: '60px' }}>
                        <img src={Logo} className="w-100 h-100" onClick={() => h('/')} />
                    </div>
                    {isAuth && <div className="w-50 my-auto d-none d-lg-inline-block">
                        <TextInputWithIcon placeholder="Search for a coach" />
                    </div>}
                    {isAuth ? <div className="my-auto d-none d-lg-inline-block">
                        <img className="mx-2 cp" src={NewsIcon} alt="" />
                        <img className="mx-2 cp" src={MsgIcon} alt="" onClick={() => {
                            // if (window.innerWidth < 1000)
                            //     dispatch(toggleNavbar(false))
                            h('/message')
                        }} />
                        <img
                            className="mx-2 cp" src={UserIcon} alt="User Icon"
                            onClick={() => {
                                // if (window.innerWidth < 1000)
                                //     dispatch(toggleNavbar(false))
                                h('/auth')
                            }} />
                    </div >
                        :
                        <div className="my-auto d-none d-lg-inline-block">
                            <button
                                onClick={() => h('/auth')}
                                className="btn btn-violet__outline px-5 mx-2" >Sign In</button>
                            <button
                                onClick={() => h('/auth/signup_1')}
                                className="btn btn-violet px-5">Sign Up</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header


const TextInputWithIcon = (props) => {
    const style = {
        outline: {
            // padding: 5,
            width: "100%",
            border: "1px solid var(--nb_primary__light)",
            borderRadius: "8px",
        },
        input: {
            border: "none",
            width: "90%",
            height: "100%",
            margin: "0px 5px",
            outline: "none",
            background: 'transparent',
            height: 45,
        },
        icon: {
            width: '10%',
            color: 'var(--nb_primary__light)'
        }
    }
    return (
        <form>
            <div className="px-1" style={style.outline}>
                <span className="text-center mx-2" style={style.icon}>{
                    <i class="fas fa-search"></i>
                }</span>
                <input type="search" style={style.input} {...props} />
            </div>
        </form>)
}