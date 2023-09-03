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
  
  const getUser = () => {
    axios
    .get(`${db}/user`)
    .then((res) => {
        setUser(res.data.data)
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }); 
    };
    
    useEffect(() => {
      getUser();
    }, []);

    const filteredUser = user.filter(users => 
      users._id == userLogin._id
    );
    

  return (
    <section className="vh-100" >
      <MDBContainer className="py-5 h-100 fluid">
          <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' , backgroundColor: '#f4f5f7' }}>
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
                        <div key={x._id}>
                        <MDBRow className="pt-1 d-flex flex-column">
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
                        </MDBRow>
                        <Button className="btn btn-danger" href='/'>
                          Back
                        </Button>
                        </div>
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