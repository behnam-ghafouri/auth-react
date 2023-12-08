import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../_store';

export { Nav };

function Nav(props) {
    const authUser = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());
    const _roles  = useSelector(x => x.roles.roles);
    // only show nav when logged in
    if (!authUser) return null;
    
    const nopadding = {
        "padding-top": 0,
        "padding-bottom": 0
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav d-flex w-100">
                <div className="mr-auto d-flex">
                    <NavLink to="/" className="nav-item nav-link mr-auto">Home</NavLink>
                    <NavLink to="/students" className="nav-item nav-link mr-auto">Students</NavLink>
                </div>
                <div>
                    <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>
                    <div className="nav-item nav-link" style={nopadding}>{_roles?.toString()?.replaceAll("ROLE_","")?.toLowerCase()}</div>
                </div>
            </div>
        </nav>
    );
}