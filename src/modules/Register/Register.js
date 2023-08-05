import React from 'react';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border border-4 border-light">

      <div className="text-center mb-5">
        <h1>SIGN UP</h1>
      </div>

      <MDBInput wrapperClass='mb-4' label='Name' id='form2' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Username' id='form2' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
      
      <MDBBtn className="mb-4">Register</MDBBtn>

    </MDBContainer>

  );
}

export default Register;