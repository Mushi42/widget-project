import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Profile = () => (<h1>Private</h1>)


function PrivateRoute() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Profile />}></Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}

export default PrivateRoute;