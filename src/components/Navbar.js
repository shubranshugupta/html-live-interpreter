import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function SearchBar() {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

function Navbar(props) {
    let sb = null;
    if (props.searchBar) {
        sb = <SearchBar />
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.theme} navbar-${props.theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="mx-3 p-2">
                        <button className={`material-symbols-outlined btn btn-outline-${props.theme}
                        text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={props.toggleMode}>
                            {props.theme === 'light' ? 'dark_mode' : 'light_mode'}
                        </button>
                    </div>
                    {sb}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    searchBar: PropTypes.bool.isRequired,
    theme: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
}

Navbar.defaultProps = {
    title: "Title",
    searchBar: true,
    theme: "light",
}

export default Navbar;
