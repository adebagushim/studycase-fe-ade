import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { Button, Card } from 'react-bootstrap';
import { selectAddToCart } from '../../redux/appSelector';
import { useSelector } from 'react-redux';

export default function Cart() {
  const newCart = useSelector(selectAddToCart);

  return (
      <MDBContainer className="py-5 h-100">
            <MDBCard style={{ borderRadius: '.5rem', backgroundColor: '#f4f5f7' }}>
              <MDBRow className="g-0">
                <MDBCol>
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6" className="text-center">Keranjang Belanja</MDBTypography>
                    <hr className="mt-0 mb-4" />
                      <div className="mb-3">
                        <input type="checkbox" className='position-absolute top-50 start-25 translate-middle'></input>
                        <label className='ms-4'>
                          <Card.Title className="fw-bold">{newCart.nama}</Card.Title>
                          <Card.Img src={newCart.image} className='shadow-2-strong' style={{ width: '260px', height: '180px' }}/>
                          <Card.Text>{newCart.count}</Card.Text>
                          <Card.Text className="text-danger">{newCart.price}</Card.Text>
                        </label>
                      </div>
                    <Button className="btn btn-info">
                      Cek Out
                    </Button>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
      </MDBContainer>
  );
}