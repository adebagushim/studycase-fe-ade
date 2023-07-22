import Layout from './components/Layout/Layout';
import React from 'react';
import Home from './modules/Home/Home';
import Login from './modules/Login/Login'


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
                    path: '/login',
                    element: <Login/>,
                },
            ]
        }
    ]
}

export default routes