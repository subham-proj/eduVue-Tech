import React from "react";
import {  MDBRow, MDBCol, MDBCard, img, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";

import p1 from '../assets/p1.JPG';
import p2 from '../assets/p2.JPG';
import p3 from '../assets/p3.JPG';


const TeamPage = () => {
  return (
    <MDBContainer>
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Meet the Core Team
          </h2>
          
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={p1}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Manik Kashyap </h5>
              <p className="grey-text">
              Self-made Entrepreneur
              with over 10 years of
              experience in managing
              online/offline
              examinations. Life-long
              Learner, Talented
              Liasioner
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={p2}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
              <p className="grey-text">
              IIT -IIM Graduate with 13
              years of multi-domain
              experience. Held National
              Head roles in multiple
              companies. Managed
              more than 100 Cr worth
              of businesses.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={p3}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="grey-text">
              Successful Businesswoman, who
              provides safe harbour for the core team
              by leveraging her 7 years of experience
              in Entrepreneurship. She manages the
              Human Resources and the creative
              department
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                
              </ul>
            </MDBCol>

            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </MDBContainer>
  );
}

export default TeamPage;