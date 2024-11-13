import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children }) => {

    const {user, loading} = useContext(authContext)

    if(loading)
    {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
        console.log('private', user)
        return children ;
    }

    return (
        <Navigate to={'/login'}></Navigate>
        
    );
};

export default PrivateRoute;

