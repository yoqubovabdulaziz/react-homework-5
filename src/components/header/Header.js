import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTERS } from '../../static/router'
import "./Header.scss"

import logo from "../../assets/images/logo.svg"
import { HiMenuAlt3 } from "react-icons/hi";



function Header() {
    return (
        <header>
            <nav className="container nav">
                <NavLink to="/">
                    <img src={logo} alt="logotip" />
                </NavLink>
                <div className="nav__list">
                    {
                        ROUTERS?.map(el => <NavLink
                            key={el.id}
                            className="nav__link"
                            to={el.url}>{el.title}</NavLink>
                        )
                    }
                </div>
                <button className="nav__menu"><HiMenuAlt3 /></button>
            </nav>
        </header>
    )
}

export default memo(Header)