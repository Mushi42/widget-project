import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SidebarLayout from '../SidebarLayout/SidebarLayout';
import Signup from '../login/Signup';
import Login from '../login/Login';


function PrivateRoute() {
    return (
        <Routes>
            <Route path="/dashboard" element={<SidebarLayout />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}

export default PrivateRoute;