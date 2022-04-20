import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute  =({isUser, Component}) =>{
    return localStorage.getItem("token") ? <Component/> : <Navigate to="/Login"/>
}