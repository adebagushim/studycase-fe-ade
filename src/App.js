import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const routing = useRoutes(routes());
  return (
    <>{routing}</>
  )
}

export default App;