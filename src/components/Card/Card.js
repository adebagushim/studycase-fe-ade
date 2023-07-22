import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  const [tag, setTag] = useState([]);
  
  const getData = () => {
    axios
    .get(`http://localhost:3000/tag`)
    .then((res) => {
        setTag(res.data.data)
      }) 
    };
    
    useEffect(() => {
      getData();
    }, []);

  return (
    <Card className="me-2 my-2" bg="light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className="fw-bold">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text class="text-danger">Rp 100.000</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;