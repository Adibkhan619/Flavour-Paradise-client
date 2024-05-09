import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-ring flex  h-64 mx-auto loading-lg"></span>
    }
    if(user){
        return children;
    }

    return (
        <Navigate to="/login"> 
        </Navigate>
        
       
    );
   
};

export default PrivateRoutes;