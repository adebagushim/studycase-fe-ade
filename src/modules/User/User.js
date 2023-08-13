import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { PersonCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import db from '../../server';
import axios from 'axios';
import { selectUser } from '../../redux/appSelector';
import { useSelector } from 'react-redux';

export default function User() {
  const userLogin = useSelector(selectUser);
  const [ user, setUser ] = useState([]);
  const [ address, setAddress ] = useState([]);
  
  const getUser = () => {
    axios
    .get(`${db}/user`)
    .then((res) => {
        setUser(res.data.data)
      }) 
    };

  const getAddress = () => {
    axios
    .get(`${db}/delivery-addresses`)
    .then((res) => {
        setAddress(res.data.data)
      }) 
    };
    
    useEffect(() => {
      getUser();
      getAddress();
    }, []);

    const filteredUser = user.filter(users => 
      users._id == userLogin._id
    );
    
    const filteredAddress = address.filter(adresses => 
      adresses.user._id == userLogin._id
    );

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
                    {filteredUser.map((x) =>{
                      return (
                        <>
                        <MDBRow className="pt-1 d-flex flex-column" key={x._id}>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Name</MDBTypography>
                            <MDBCardText className="text-muted">{x.name}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Username</MDBTypography>
                            <MDBCardText className="text-muted">{x.username}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Email</MDBTypography>
                            <MDBCardText className="text-muted">{x.email}</MDBCardText>
                          </MDBCol>
                          <MDBCol className="mb-3">
                            <MDBTypography tag="h6" className=''>
                              Alamat&nbsp;&nbsp;&nbsp;
                              <Button href='address' className="btn btn-outline-info btn-sm">
                                Set Alamat
                              </Button>
                            </MDBTypography>
                            {filteredAddress.map((y) =>{
                              return (
                                <MDBCardText className="text-muted">{y.alamat}, {y.kelurahan}, {y.kecamatan}, {y.kabupaten}, {y.provinsi}</MDBCardText>
                              )
                            })}
                          </MDBCol>
                          <MDBCol size="9" className="mb-3">
                            <MDBTypography className="d-flex" tag="h6">
                              Keranjang
                            </MDBTypography>
                                <Button href='cart' className="btn btn-outline-info btn-sm">
                                Cek Keranjang
                              </Button>
                            <MDBCardText className="text-muted">Test Keranjang</MDBCardText>
                            </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Alamat</MDBTypography>
                            <MDBCardText className="text-muted">Test Alamat</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <Button className="btn btn-danger">
                          Log Out
                        </Button>
                        </>
                      )
                    })}
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