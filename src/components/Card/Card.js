import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Card from 'react-bootstrap/Card';
import db from '../../server';
import { Row } from 'react-bootstrap';
import { selectCategoryQ, selectSearchQ, selectTagQ } from '../../redux/appSelector';
import { useSelector } from 'react-redux';

function Cards() {
  const search = useSelector(selectSearchQ);
  const categories = useSelector(selectCategoryQ);
  const tags = useSelector(selectTagQ);
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
      products.name?.toLowerCase().includes(search.toLowerCase()) 
      &&
      products.category.name?.includes(categories)
      &&
      products.tags.name?.includes(tags)
    );
    
    let Rupiah = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

  return (
    <Row className="d-flex flex-row" style={{ marginLeft: '80px', marginRight: '80px' }}>
      {filteredProducts.map((x) =>{
        return (
          <>
          <Card className="me-2 my-2" bg="light" style={{ width: '18rem' }}  key={x._id}>
            <Card.Img src={x.image} className='shadow-2-strong' style={{ width: '260px', height: '130px' }}/>
            <Card.Body>
              <Card.Title className="fw-bold">{x.name}</Card.Title>
              <Card.Text>{x.description}</Card.Text>
              <Card.Text className="text-danger">{Rupiah.format(x.price)}</Card.Text>
            </Card.Body>
          </Card>
          </>
        )
      })}
    </Row>
  );
}


export default Cards;