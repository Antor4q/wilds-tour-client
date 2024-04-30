import { useContext } from "react";
import { AuthContext } from "./ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <>
        <div className="lg:h-[calc(100vh-376px)] h-[calc(100vh-597px)] md:h-[calc(100vh-465px)] lg:max-w-[1440px] mx-auto flex justify-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>

  
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children : PropTypes.node
}