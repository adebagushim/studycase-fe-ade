import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setLoading, setUser } from '../../redux/appActions';
import { selectAuth, selectLoading } from '../../redux/appSelector';
import Spinner from 'react-bootstrap/Spinner';
import instance from '../../axios';
import { Navigate } from "react-router-dom";
import { MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const auth = useSelector(selectAuth);
  const [ uname, setUname ] = useState('');
  const [ pword, setPword ] = useState('');

  const logIn = (e) => {

    e.preventDefault()
    dispatch(setLoading(true));
    // Make a request for a user with a given ID
    instance.post('auth/login', { username: uname, password: pword })
    .then(function (response) {
        // handle success
        dispatch(setAuth(true));
        dispatch(setUser(response.data.data.user));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        dispatch(setLoading(false));
    });
  }

  if (auth) {
    return <Navigate to="/"/>
  }
  
  return (
    <>
      { loading ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner> : null }


      <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border border-4 border-light">

      <div className="text-center mb-5">
        <h1>WELCOME</h1>
      </div>

      <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text'
        value={uname}
        onChange={(e) => setUname(e.target.value)}
      />
      <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password'
        value={pword}
        onChange={(e) => setPword(e.target.value)}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={logIn}>Login</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="/register">Register</a></p>
      </div>

      </MDBContainer>
    </>
  );
}

export default Login;