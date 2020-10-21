import React from 'react';
import './Layout.css';
import { Link } from 'react-router-dom'

export default function Layout(props) {
    return (
        <div className="main-lay">
            <Link to="/">
                GorJeo
            </Link>

            <div className="li-l">
                {props.currentUser ? <li className="single-li-lay">New Post</li> : null}

                <Link to="/register">
                    {props.currentUser ? <li className="single-li-lay">Name</li> : <li className="single-li-lay">Register</li>}
                </Link>
                {props.currentUser ?
                    <Link to="/login" onClick={props.handleLogout}> <li className="single-li-lay">Log out</li></Link>
                    : <Link to="/login"><li className="single-li-lay">Log in</li></Link>
                }
            </div>
        </div>
    )
}
