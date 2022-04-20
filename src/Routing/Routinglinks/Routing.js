import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import { Home,About,Contact,Login,Dash} from '../../Screen';
import React,{useState} from "react";
import { PrivateRoute } from "./PrivateRoute";


export const RouteLink= ()=>{

    const item = [
        {path:"/", Component: Home},
        {path:"/about", Component: About},
        {path:"/contact", Component: Contact},
        {path:"/Login", Component:Login },
    ]

    const item2 =[
        {path:"/DashBoard", Component:Dash}
    ]

    return(
        <>
            <BrowserRouter>
            <nav>
               <Link to="/">Home</Link> 
               <Link to="/about">About</Link> 
               <Link to="/contact">Contact</Link>
               <Link to="/Login">Login</Link>
               <Link to="/DashBoard">Dashboard</Link>

            </nav>
                <Routes>
                {
                    item.map((item)=>{
                        return(<Route path={item.path} element={<item.Component/>}/>)

                    })
                }

                {
                    item2.map((item)=>{
                        return(<Route path={item.path} element= { <PrivateRoute Component={item.Component} />}/>)
                    })
                }
               
                </Routes>

            </BrowserRouter>
        </>
    )
}