import React from 'react';
import './Layout.css';
import { Link } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="main-lay">
            <Link to="/">
                GorJeo
            </Link>

            <div className="li-l">
                <li className="single-li-lay">New Post</li>
                <Link to="/register">
                    <li className="single-li-lay">Register</li>
                </Link>
                <li className="single-li-lay">Log out</li>
            </div>
        </div>
    )
}
