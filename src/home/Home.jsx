import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setRoles } from '../_store';

export { Home };

function Home() {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
    const { users } = useSelector(x => x.users);
    const _roles  = useSelector(x => x.roles.roles);
    useEffect(() => {
        const decodedToken = jwtDecode(authUser?.accessToken);
        const userRoles = decodedToken?.roles?.map(e=>e.authority);
        dispatch(setRoles(userRoles));
    }, []);

    return (
        <div>
            <h1>Hi {_roles?.toString()}!</h1>
            <p>You're logged in with React 18 + Redux & JWT!!</p>
            <h3>Users from secure api end point:</h3>
            {users.length &&
                <ul>
                    {users.map(user =>
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    )}
                </ul>
            }
            {users.loading && <div className="spinner-border spinner-border-sm"></div>}
            {users.error && <div className="text-danger">Error loading users: {users.error.message}</div>}
        </div>
    );
}
