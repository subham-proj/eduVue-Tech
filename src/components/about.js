import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';


function About() {
    return (
        <div className="about">
            <h1>About us</h1>
            <Container className="about-detail">
            <Row>
                <Col sm={12} md={6}>
                    <ul>
                    <li>We are a CMM Level 5 certified technology company</li>
                    <li>We are engaged in providing Technology to Academic institutions to convert their offline
                    business to Online</li>
                    <li>eduVue is an Education Institute Management System (EIMS) which is designed on a
                    modern, cloud based, multi-tenant architecture</li>
                    <li>It can be anywhere as you like, such as any geography or any devices of your choice.</li>
                    <li>Students, faculty and staff members of the institute now can perform all their duties and
                    many more activities through a single window which includes web, mobile and other
                    devices</li>
                    </ul>
                </Col>

                <Col sm={12} md={6}>
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_fsonufza.json"  background="transparent"  speed="2"  style={{width:"100%",height:"100%"}} loop  autoplay></lottie-player>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default About
