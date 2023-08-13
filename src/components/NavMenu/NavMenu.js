import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth, selectUser } from '../../redux/appSelector';
// import styles from './NavMenu.module.scss'
import { setAuth, setSearch } from '../../redux/appActions';
import { Badge } from 'react-bootstrap';
import { Cart, Unity } from "react-bootstrap-icons";
import { useEffect, useState } from 'react';
import axios from 'axios';
import db from '../../server';


function NavMenu() {
  const auth = useSelector(selectAuth);
  const userLogin = useSelector(selectUser);
  const dispatch = useDispatch();
  const [ query, setQuery ] = useState('');
  const [ q, setQ ] = useState('');
  const [ category, setCategory ] = useState([]);
  
  const getData = () => {
    axios
    .get(`${db}/category`)
    .then((res) => {
        setCategory(res.data.data)
      }) 
    };
    
    useEffect(() => {
      getData();
    }, []);
  
  dispatch(setSearch(q));
    
  const logOut = () => {
    dispatch(setAuth(false))
  }

  const search = () => {
    setQ(query)
  }

  return (
    <Navbar style={{ width: '100%' }} bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand className="fs-4 fw-bold" href="/"><Unity /> BardiStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
              <NavDropdown className="me-2" title="Kategori" id="navbarScrollingDropdown">
                {category.map((x) =>{
                  return (
                    <NavDropdown.Item href="#action3">{x.name}</NavDropdown.Item>
                  )
                })}
              </NavDropdown>
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
                  onClick={search}
                  >Search
                </Button>
              </Form>
            </Nav>
          { auth && 
            <NavDropdown className="fw-bold me-2 my-2" title={`Hello, ${userLogin.name.toUpperCase()}`} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/cart">Keranjang</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                style={{ fontWeight: 'bold', color: '#fff', backgroundColor: 'red' }}
                href="/"
                onClick={logOut}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown> 
          }
          { !auth &&
            <>
              <Nav.Link className="fw-bold fs-5 me-2 my-2" href="login">Login</Nav.Link>
              <Nav.Link className="fw-bold fs-5 me-2 my-2" href="register">Register</Nav.Link>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu