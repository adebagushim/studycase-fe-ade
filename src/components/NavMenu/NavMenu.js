import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../../redux/appSelector';
// import styles from './NavMenu.module.scss'
import { setAuth, setSearch } from '../../redux/appActions';
import { Badge } from 'react-bootstrap';
import { Cart, Unity } from "react-bootstrap-icons";
import { useEffect, useState } from 'react';

function ButtonLogout({ action }) {
  return (<Nav.Link onClick={action}>
    Log out
  </Nav.Link>)
}


function NavMenu() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [ query, setQuery ] = useState('');
  
  useEffect(() => {
    console.log(query);
  },[query])
  
  dispatch(setSearch(query));
    

  const logOut = () => {
    dispatch(setAuth(false))
  }

  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand className="fs-4 fw-bold" href="/"><Unity /> BardiStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Kategori" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Makanan</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Minuman</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Snack</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Desert</NavDropdown.Item>
            </NavDropdown>
            { auth && <ButtonLogout action={logOut}/> }
          </Nav>
          <Form className="d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button 
              variant="outline-success"
              >Search
              
            </Button>
          </Form>
          <Nav.Link className="me-2 my-2" href="/user/cart">
            <Cart className="fs-5 fw-bold" /> 
            <Badge pill bg="secondary">9</Badge>
          </Nav.Link>
          <Nav.Link className="fw-bold me-2 my-2" href="login">Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu