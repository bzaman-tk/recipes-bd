import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="container mx-auto text-center my-16">
                <button className="btn loading mx-auto">loading</button>
            </div>
        )
    }
    if (user) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <Navigate to='/login' state={{ "from": location.pathname }} />
    )

};

export default PriveteRoutes;