import { NavLink } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react'
import { SpinnerLoading } from '../Utils/SpinnerLoading';
import { Link } from "react-router-dom";

export const Navbar = () => {

    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) {
        return <SpinnerLoading />
    }
    const handleLogout = async () => oktaAuth.signOut();
    console.log(authState);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className="container-fluid">
                <span className="navbar-brand">React Library Spring</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/home' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/search' className="nav-link">Search Books</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {!authState.isAuthenticated
                            ?
                            <li className="nav-item m-1">
                                <Link type="button" className="btn btn-dark" to='/login'>Sign In</Link>
                            </li>
                            :
                            <li>
                                <button className='btn btn-danger' onClick={handleLogout}>LogOut</button>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}
