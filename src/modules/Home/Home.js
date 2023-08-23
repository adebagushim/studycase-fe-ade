import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../../redux/appSelector';
import { setAuth } from '../../redux/appActions';
import { Col, Row } from 'react-bootstrap';
import Cards from '../../components/Card/Card';
import Tags from '../../components/Tag/Tag';

const Home = () => {
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    return (        
        <div>
            <Row>
                <Col>
                    <Tags/>
                    <Cards/>
                </Col>
            </Row>
        </div>
    );
};


Home.propTypes = {

};


export default Home;