import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/appSelector';
import { useState } from 'react';
import axios from 'axios';
import db from '../../server';
import { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact';
import { MDBBtn } from 'mdb-react-ui-kit';
import { setAddress } from '../../redux/appActions';

function Address() {
    const userLogin = useSelector(selectUser);
    const [ allAddress, setAllAddress ] = useState([]);
    const dispatch = useDispatch();
    
    const getAddress = () => {
        axios
        .get(`${db}/delivery-addresses`)
        .then((res) => {
            setAllAddress(res.data.data)
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

    const filteredAddress = allAddress.filter(adresses => 
        adresses.user._id == userLogin._id
    );

    const edit = (y) => {
        dispatch(setAddress(y))
    }

    const hapus = (y) => {
        axios
        .delete(`${db}/delivery-addresses/${y._id}`)
        .then((res) => {
            setAllAddress(res.data.data)
        }) 
        .then(function (response) {
            console.log('Hapus Alamat Berhasil');
        })
        .catch(function (error) {
            console.log('Error Hapus Alamat Error');
        });
    }

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
                        <Form key={y._id} className="mb-3 d-flex justify-content-between">
                            <div className="mb-3">
                                {`${y.alamat} ${y.kelurahan} ${y.kecamatan} ${y.kabupaten} ${y.provinsi} ( ${y.detail} )`}
                            </div>
                            <div>
                                <MDBBtn 
                                    className="mb-3 me-3 btn btn-success" 
                                    href='editaddress' 
                                    onClick={() => edit(y)}>
                                    Edit
                                </MDBBtn>
                                <MDBBtn 
                                    className="mb-3 btn btn-danger" 
                                    href='/' 
                                    onClick={() => hapus(y)}>
                                    Hapus
                                </MDBBtn>
                            </div>
                        </Form>
                        )
                    })}
                    <MDBBtn 
                        className="mt-3 me-3" 
                        href='addaddress' 
                        variant="outline-success">
                        Tambah Alamat
                    </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    </MDBContainer>
  );
}

export default Address;