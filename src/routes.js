import Layout from './components/Layout/Layout';
import React from 'react';
import Home from './modules/Home/Home';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import User from './modules/User/User';
import Cart from './modules/Carts/Cart';


const routes = () => {
    return [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: 'login',
                    element: <Login/>,
                },
                {
                    path: 'register',
                    element: <Register/>,
                },
                {
                    path: 'user',
                    element: <User/>,
                },
                {
                    path: 'cart',
                    element: <Cart/>,
                },
            ]
        }
    ]
}

export default routes