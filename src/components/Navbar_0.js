import React from 'react'       // rfc- React functional Component
import PropTypes from 'prop-types'  // impt-import prototype

export default function Navbar(props) {

    return (
        // For dark mode
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// This helps in deciding out the type of value it is going to accept
Navbar.propTypes = {      // must be a small "p"
    title: PropTypes.string.isRequired,     // isRequired is used to set a required field
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title",
    aboutText: "Set aboutText",
}