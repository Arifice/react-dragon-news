
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={'/login'} state={location.pathname}></Navigate>
    );
};

PrivateRoute.propTypes = {
    children:PropTypes.node,
};

export default PrivateRoute;