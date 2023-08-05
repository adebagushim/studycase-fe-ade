import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { PersonCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

export default function Cart() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <PersonCircle className="my-5" size={140} />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Keranjang Belanja</MDBTypography>
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
                    <Button class="btn btn-info">
                      Log Out
                    </Button>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}