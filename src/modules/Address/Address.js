import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/appSelector';
import { useState } from 'react';
import axios from 'axios';
import db from '../../server';
import { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact';
import { MDBBtn } from 'mdb-react-ui-kit';

function Address() {
    const userLogin = useSelector(selectUser);
    const [ address, setAddress ] = useState([]);
    
    const getAddress = () => {
        axios
        .get(`${db}/delivery-addresses`)
        .then((res) => {
            setAddress(res.data.data)
        }) 
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };
        
    useEffect(() => {
        getAddress();
    }, []);

    const filteredAddress = address.filter(adresses => 
        adresses.user._id == userLogin._id
    );

  return (
    <MDBContainer className="py-5 h-100">
        <MDBCard className="mb-3" style={{ borderRadius: '.5rem', backgroundColor: '#f4f5f7' }}>
            <MDBCardBody className="p-4">
                <MDBTypography tag="h6" className="text-center">List Alamat Tujuan</MDBTypography>
                <hr className="mt-0 mb-4" />
                <MDBRow className="pt-1 d-flex flex-column">
                    <MDBCol className="mb-3">
                    {filteredAddress.map((y) =>{
                        return (
                        <Form key={y._id}>
                        <div className="mb-3">
                            {`${y.alamat} ${y.kelurahan} ${y.kecamatan} ${y.kabupaten} ${y.provinsi} ( ${y.detail} )`}
                        </div>
                        {console.log(filteredAddress.alamat)}
                        </Form>
                        )
                    })}
                    <MDBBtn className="mt-3 me-3" href='addaddress' variant="outline-success">Tambah Alamat</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    </MDBContainer>
  );
}

export default Address;