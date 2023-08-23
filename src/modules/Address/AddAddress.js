import React from 'react';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { selectUser } from '../../redux/appSelector';
import { useSelector } from 'react-redux';
import db from '../../server';

function AddAddress() {
    const [ alamat, setAlamat ] = useState('');
    const [ kelurahan, setKelurahan ] = useState('');
    const [ kecamatan, setKecamatan ] = useState('');
    const [ kabupaten, setKabupaten ] = useState('');
    const [ provinsi, setProvinsi ] = useState('');
    const [ detail, setDetail ] = useState('');
    const userLogin = useSelector(selectUser);

    const submit = (e) => {
        e.preventDefault()

        axios.post(`${db}/delivery-addresses`, {
            alamat: alamat,
            kelurahan: kelurahan,
            kecamatan: kecamatan,
            kabupaten: kabupaten,
            provinsi: provinsi,
            detail: detail,
            user: userLogin.name
            })
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        
                
        }
    
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border border-4 border-light">
            <div className="text-center mb-5">
                <h1>Add Address</h1>
            </div>

            <MDBInput wrapperClass='mb-4' label='Alamat' id='form2' type='text'
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Kelurahan' id='form2' type='text'
                value={kelurahan}
                onChange={(e) => setKelurahan(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Kecamatan' id='form2' type='text'
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Kabupaten' id='form2' type='text'
                value={kabupaten}
                onChange={(e) => setKabupaten(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Provinsi' id='form2' type='text'
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Detail' id='form2' type='text'
                value={detail}
                onChange={(e) => setDetail(e.target.value)}/>
            
            <MDBBtn className="mb-4" onClick={submit} href='/'>Submit</MDBBtn>
        </MDBContainer>

  );
}

export default AddAddress;