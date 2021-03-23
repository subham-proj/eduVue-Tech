import React from 'react';
import{Modal,Form,Row,Col,Button} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

    return (
        <>
        
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
          We will contact you Soon!<br></br>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form>
        <Row>
            <Col style={{padding:"10px"}}>
            <Form.Control name="firstname" placeholder="First Name" required />
            </Col>
            <Col style={{padding:"10px"}}>
            <Form.Control name="lastname" placeholder="Last Name" />
            </Col>
        </Row>

        <Row>
            <Col style={{padding:"10px"}}>
            <Form.Control name="email" type="email" placeholder="Your email address" required />
            </Col>
            <Col style={{padding:"10px"}}>
            <Form.Control name="phone" type="tel" placeholder="Phone number" required/>
            </Col>
        </Row>

        <Row>
            <Col style={{padding:"10px"}}>
            <Form.Control name="detail" as="textarea" placeholder="Write your requirement briefly" rows="3" />

            </Col>
            
        </Row>
            <Button type="submit" onClick={props.onHide}>
                Submit
            </Button>
         </Form>
        
        </Modal.Body>

            
        
      </Modal>
      </>
    );
  }

  
export default MyVerticallyCenteredModal;