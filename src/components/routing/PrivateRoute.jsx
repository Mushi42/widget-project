import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SidebarLayout from '../layout/SidebarLayout/SidebarLayout';


function PrivateRoute() {
    return (
        <Routes>
            <Route path="/dashboard" element={<SidebarLayout />}></Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}

export default PrivateRoute;