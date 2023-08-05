import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import db from '../../server';
import { Container } from 'react-bootstrap';
import { selectSearch } from '../../redux/appSelector';
import { useSelector } from 'react-redux';

function Cards() {
  const [card, setCard] = useState([]);
  const search = useSelector(selectSearch);
  
  const getData = () => {
    axios
    .get(`${db}/product`)
    .then((res) => {
        setCard(res.data.data)
      }) 
    };
    
    useEffect(() => {
      getData();
    }, []);

    // const filtered = () =>{
    //     if (
    //       item.name.toLowerCase().includes(search.toLowerCase())
    //       ){
    //           card
    //       };
    //   }
    
  return (
    <Container className="d-flex flex-row">
      {card.map((x) =>{
        return (
          <>
          <Card className="me-2 my-2" bg="light" style={{ width: '18rem' }}>
          <Card.Img 
            src={x.image} 
            className='img-fluid shadow-2-strong' />
            {console.log(search)};
          <Card.Body>
            <Card.Title className="fw-bold">{x.name}</Card.Title>
            <Card.Text>{x.description}</Card.Text>
            <Card.Text class="text-danger">{x.price}</Card.Text>
          </Card.Body>
          </Card>
          </>
        )
      })}
    </Container>
  );
}

export default Cards;