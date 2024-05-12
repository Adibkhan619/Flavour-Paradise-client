import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-ring flex  h-64 mx-auto loading-lg"></span>
    }
    if(user){
        return children;
    }

    return (
        <Navigate to="/login" state={location.pathname} replace={true}> 
        </Navigate>
        
       
    );
   
};

export default PrivateRoutes;
