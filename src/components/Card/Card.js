import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import db from '../../server';
import { Button, Row } from 'react-bootstrap';
import { selectAuth, selectCategoryQ, selectSearchQ, selectTagQ } from '../../redux/appSelector';
import { useDispatch, useSelector } from 'react-redux';
import { setAddToCart } from '../../redux/appActions';

function Cards() {
  const auth = useSelector(selectAuth);
  const search = useSelector(selectSearchQ);
  const categories = useSelector(selectCategoryQ);
  const tags = useSelector(selectTagQ);
  const [ product, setProduct ] = useState([]);
  const [ count, setCount ] = useState(0);
  const dispatch = useDispatch();
  
  const getData = () => {
    let pathApi = `${db}/product`;
    
    if (categories) {
      pathApi = `${db}/product?category=${categories}`
      // pathApi += `?category=${categories}`
    }
    else if (tags) {
      pathApi = `${db}/product?tags=${tags}`
      // pathApi += `?tags=${tags}`
    }
    else if (search) {
      pathApi = `${db}/product?q=${search}`
      // pathApi += `?q=${search}`
    };

    axios
    .get(pathApi)
    .then((res) => {
        setProduct(res.data.data)
        console.log(pathApi)
      }) 
      .then(function (response) {
      })
      .catch(function (error) {
      });
    };
    
    useEffect(() => {
      getData();
    }, [categories, tags, search]);


    let Rupiah = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });


    const addProductToCart = (_id, name, price, image, count) => {
      console.log(_id, name, price, image, count, count*price);
      dispatch(setAddToCart({ 
        id: _id,
        name: name,
        price: price,
        image: image,
        count: count,
        totalPrice: count*price
      }))
    }


  return (
    <Row className="d-flex flex-row" style={{ marginLeft: '80px', marginRight: '80px' }}>
      {product.map((x) =>{
        return (
          <Card className="me-1 my-2" bg="light" style={{ width: '18rem' }}  key={x._id}>
            <Card.Img src={x.image} className='shadow-2-strong' style={{ width: '260px', height: '180px' }}/>
            <Card.Body>
              <Card.Title className="fw-bold">{x.name}</Card.Title>
              <Card.Text>{x.description}</Card.Text>
              <Card.Text className="text-danger">{Rupiah.format(x.price)}</Card.Text>
              { auth && 
                <div className='d-flex justify-content-evenly'>
                  <Button onClick={() => addProductToCart(x._id, x.name, x.price, x.image, count)} className='me-5'>Pesan</Button>
                  <Button onClick={() => setCount(count - 1)}>-</Button>
                  <span>{count}</span>
                  <Button onClick={() => setCount(count + 1)}>+</Button>
                </div>
              }
            </Card.Body>
          </Card>
        )
      })}
    </Row>
  );
}


export default Cards;