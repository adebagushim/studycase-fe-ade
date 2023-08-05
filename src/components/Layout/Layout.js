import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavMenu from '../NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <NavMenu/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Outlet/> 
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer/> 
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;