import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Login = () => (<h1>Public</h1>)

function PublicRoute() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default PublicRoute;