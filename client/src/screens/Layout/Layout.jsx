import React, { useEffect } from 'react';
import './Layout.css';
import { Link } from 'react-router-dom'

export default function Layout(props) {

    const { currentUser, handleLogout } = props
    return (
        <div className="main-lay">
            <Link to="/">
                GorJeo
            </Link>

            <div className="li-l">

                <Link to="/register">
                    {currentUser
                        ? <Link to="/"> <li className="single-li-lay">{currentUser.username}</li></Link>
                        // ? <Link to="/"> <li className="single-li-lay">blabla</li></Link>
                        : <li className="single-li-lay">Register</li>}
                </Link>
                {currentUser
                    ? <Link to="/login" onClick={handleLogout}> <li className="single-li-lay">Log out</li></Link>
                    : <Link to="/login"><li className="single-li-lay">Log in</li></Link>
                }
            </div>
        </div>
    )
}
