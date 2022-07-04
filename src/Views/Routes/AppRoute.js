import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header';
import Login from '../Login_Signip/Login';
import About from '../Pages/About';
import CustomizeParking from '../Pages/CustomizeParking';
import MembershipPlans from '../Pages/MembershipPlans';
import MyParking from '../Pages/MyParking';
import NotFound from '../Pages/NotFound';


function AppRoute() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' />
                    <Route index element={<Login />} />
                    <Route path="about" element={<About />} />
                    <Route path="customize-parking" element={<CustomizeParking />} />
                    <Route path="myparking" element={<MyParking />} />
                    <Route path="membership-plans" element={<MembershipPlans />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute