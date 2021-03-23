import React from 'react';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import MyVerticallyCenteredModal from './form';
import {Link} from 'react-scroll';

function Header(){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" style={{fontWeight:"bold"}}>
        <Container>

            <Navbar.Brand href="/" className="navbar-name"><h3> eduVue Technologies </h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto py-2">
                <Nav.Link className="px-3"><Link to="about" smooth={true} duration={2000}>About</Link></Nav.Link>
                <Nav.Link className="px-3"><Link to="services" smooth={true} duration={2000}>Services</Link></Nav.Link>
                <Nav.Link className="px-3"><Link to="blogs" smooth={true} duration={2000}>Blogs</Link></Nav.Link>
                <Nav.Link className="px-3"><Link to="contact" smooth={true} duration={2000}>Contact Us</Link></Nav.Link>
                <Button  variant="info" size="md" onClick={() => setModalShow(true)}>Get a Quote</Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default Header;