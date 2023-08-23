import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Facebook, HouseDoorFill, Instagram, TelephoneFill, Tiktok, Twitter } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted fluid mt-5'>
      <section className='d-flex justify-content-center p-4 border-bottom border-top'>
        <div className='me-3 d-none d-lg-block '>
          <span>Get connected with us on social networks :</span>
        </div>

        <div>
          <a href='https://www.facebook.com' className='me-4 text-reset'>
            <Facebook/>
          </a>
          <a href='https://www.twitter.com' className='me-4 text-reset'>
            <Twitter/>
          </a>
          <a href='https://www.tiktok.com' className='me-4 text-reset'>
            <Tiktok/>
          </a>
          <a href='https://www.instagram.com' className='me-4 text-reset'>
            <Instagram/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                BardiStore
              </h6>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <HouseDoorFill/>
                &nbsp;Jalan Gajah No. 3 Yogyakarta
              </p>
              <p>
                <TelephoneFill/>
                &nbsp;+ 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2021 Copyright :&nbsp;
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}