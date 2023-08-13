import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import db from '../../server';
import { Row } from 'react-bootstrap';
import { selectSearch } from '../../redux/appSelector';
import { useSelector } from 'react-redux';

function Cards() {
  const search = useSelector(selectSearch);
  const [ product, setProduct ] = useState([]);
  
  const getData = () => {
    axios
    .get(`${db}/product`)
    .then((res) => {
        setProduct(res.data.data)
      }) 
    };
    
    useEffect(() => {
      getData();
    }, []);

    const filteredProducts = product.filter(products => 
      products.name.toLowerCase().includes(search.toLowerCase())
    );
    
  return (
    <Row className="d-flex flex-row" style={{ marginLeft: '80px', marginRight: '80px' }}>
      {filteredProducts.map((x) =>{
        return (
          <>
          <Card className="me-2 my-2" bg="light" style={{ width: '18rem' }}  key={x._id}>
            <Card.Img 
              src={x.image} 
              className='img-fluid shadow-2-strong' />
            <Card.Body>
              <Card.Title className="fw-bold">{x.name}</Card.Title>
              <Card.Text>{x.description}</Card.Text>
              <Card.Text class="text-danger">{x.price}</Card.Text>
            </Card.Body>
          </Card>
          </>
        )
      })}
    </Row>
  );
}

export default Cards;