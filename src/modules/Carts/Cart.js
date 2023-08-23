import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function Cart() {
  return (
      <MDBContainer className="py-5 h-100">
            <MDBCard style={{ borderRadius: '.5rem', backgroundColor: '#f4f5f7' }}>
              <MDBRow className="g-0">
                <MDBCol>
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6" className="text-center">Keranjang Belanja</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1 d-flex flex-column">
                      <MDBCol size="6" className="mb-3 border border-2">
                        <MDBTypography tag="h4">Order 1</MDBTypography>
                        <MDBCardText className="text-muted">Nama Barang</MDBCardText>
                        <img
                          src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                          className='img-fluid shadow-2-strong mb-3'
                          alt=''
                        />
                        <MDBCardText className="text-muted mb-3">Harga 1 juta</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3 border border-2">
                        <MDBTypography tag="h4">Order 2</MDBTypography>
                        <MDBCardText className="text-muted">Nama Barang 2</MDBCardText>
                        <img
                          src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                          className='img-fluid shadow-2-strong mb-3'
                          alt=''
                        />
                        <MDBCardText className="text-muted mb-3">Harga 12 juta</MDBCardText>
                      </MDBCol>
                    </MDBRow>
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