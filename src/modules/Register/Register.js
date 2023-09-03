import React from 'react';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import db from '../../server';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Register() {
  const [ name, setName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const reg = (e) => {
      e.preventDefault()

      axios.post(`${db}/user`, {
          name: name,
          username: username,
          email: email,
          password: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
      
      }


  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border border-4 border-light">

      <div className="text-center mb-5">
        <h1>SIGN UP</h1>
      </div>

      <MDBInput wrapperClass='mb-4' label='Name' id='form2' type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Username' id='form2' type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      
      <MDBBtn className="mb-4" href='/' onClick={reg}>Register</MDBBtn>

    </MDBContainer>

  );
}

export default Register;