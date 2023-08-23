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
                    <MDBCol size="6" className="mb-3">
                    {filteredAddress.map((y) =>{
                        return (
                        <Form>
                        <div className="mb-3">
                            <Form.Check
                                type='radio'
                                value={`${y.alamat} ${y.kelurahan} ${y.kecamatan} ${y.kabupaten} ${y.provinsi}`}
                                label={`${y.alamat} ${y.kelurahan} ${y.kecamatan} ${y.kabupaten} ${y.provinsi}`}
                                />
                        </div>
                        </Form>
                        )
                    })}
                    <MDBBtn className="mt-3 me-3" href='addaddress' variant="outline-success">Tambah Alamat</MDBBtn>
                    <MDBBtn className="mt-3" href='/' variant="outline-success">Back</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    </MDBContainer>
  );
}

export default Address;