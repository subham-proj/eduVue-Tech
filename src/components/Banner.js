import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

import Cover from '../assets/bannerMain.png';
import Header from './Header';

import MyVerticallyCenteredModal from './form';
import {Animated} from "react-animated-css";

function Banner(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div className="background">
            <Header/>

            <Container>
                
                <Row>
                    <Col lg={6} className="coverpage">

                        <h2>
                            eduVue Technologies
                        </h2>
                    
                        
                        <h5>Simplifying access to learning
                        </h5>
                        <br></br>
                        <Button variant="info" size="lg" onClick={() => setModalShow(true)}>Get a Quote</Button>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col lg={6}>
                        <Animated animationIn="fadeInRight" animationInDuration={2000} isVisible={true}>
                            <div className="coverPic">
                                <img src={Cover} alt="banner"/>
                            </div>
                        </Animated> 
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Banner;