import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setLoading, setUser } from '../../redux/appActions';
import { selectAuth, selectLoading } from '../../redux/appSelector';
import Spinner from 'react-bootstrap/Spinner';
import instance from '../../axios';
import { Navigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const auth = useSelector(selectAuth);

  const submit = (e) => {

    e.preventDefault()
    dispatch(setLoading(true));
    // Make a request for a user with a given ID
    instance.post('auth/login', { username: 'admin', password: 'admin' })
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
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
            Submit
        </Button>
        </Form>
    </>
  );
}

export default Login;