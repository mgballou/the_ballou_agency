import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

function Header(props) {

    const location = useLocation()

    const [activeLink, setActiveLink] = useState(location.pathname)

    function checkActive(evt){
        if (!evt.target.id) return
        if (evt.target.id == "brand") {
            setActiveLink("/")
        } else {
            setActiveLink(evt.target.id)

        }
        
    }


    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" onClick={checkActive}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" id="brand">The Ballou Agency</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto" >
                        <li className="nav-item">
                            <Link className={activeLink !== "/" ? "nav-link" : "nav-link active"} to="/" id="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeLink !== "/about" ? "nav-link" : "nav-link active"} to="/about" id="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeLink !== "/blog" ? "nav-link" : "nav-link active"} to="/blog" id="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activeLink !== "/consultation" ? "nav-link" : "nav-link active"} to="/consultation" id="/consultation">Request a Consultation</Link>
                        </li>
                    </ul>
            
                </div>
            </div>
        </nav>
    )
}

export default Header