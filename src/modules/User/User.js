import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { PersonCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

export default function User() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100 fluid">
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
                    <MDBTypography tag="h6">Information User</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1 d-flex flex-column">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Name</MDBTypography>
                        <MDBCardText className="text-muted">Test Nama</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">Test Username</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">Test Email</MDBCardText>
                      </MDBCol>
                      <MDBCol size="9" className="mb-3">
                        <MDBTypography class="d-flex" tag="h6">
                          Keranjang
                          <Button class="btn btn-outline-info btn-sm">
                            Cek Keranjang
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">Test Keranjang</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Alamat</MDBTypography>
                        <MDBCardText className="text-muted">Test Alamat</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1 d-flex flex-column">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Name</MDBTypography>
                        <MDBCardText className="text-muted">Test Nama</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">Test Username</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">Test Email</MDBCardText>
                      </MDBCol>
                      <MDBCol size="9" className="mb-3">
                        <MDBTypography class="d-flex" tag="h6">
                          Keranjang
                          <Button class="btn btn-outline-info btn-sm">
                            Cek Keranjang
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">Test Keranjang</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Alamat</MDBTypography>
                        <MDBCardText className="text-muted">Test Alamat</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <Button class="btn btn-danger">
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