import React from 'react';

import '../App.css';

import {Container,Row,Col} from 'react-bootstrap';

import {Link} from 'react-scroll';

function Footer(){
    return(
        <section id="footer" classNameName="footer">
            <footer className="site-footer">
                <Container>
                    <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <h6>Our Mission</h6>
                        <p className="text-justify">To build foolproof solutions for Academic institutions by leveraging best
                        technology and increase its adoption among stakeholders</p>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={6}>
                        <h6>Our Services</h6>
                        <ul className="footer-links">
                        <li>Online Classes</li>
                        <li>Coding Bootcamp</li>
                        <li>Free Courses</li>
                        <li>Coding Nuture Batch</li>
                        <li>Programming lectures</li>

                        </ul>
                    </Col>

                    
                    <Col lg={3} md={3} sm={6} xs={6}>
                        <h6>Quick Links</h6>
                        <ul  className="footer-links">
                        <li><Link to="about" smooth={true} duration={2000}>About us</Link></li>
                        <li><Link to="contact" smooth={true} duration={2000}>Contact us</Link></li>
                        <li><Link to="services" smooth={true} duration={2000}>Services</Link></li>
                        <li><Link to="testimonial" smooth={true} duration={2000}>Testimonial</Link></li>
                        <li><Link to="privacy" smooth={true} duration={2000}>Privacy Policy</Link></li>
                        <li><Link to="sitemap" smooth={true} duration={2000}>Sitemap</Link></li>
                        </ul>
                    </Col>
                    </Row>
                    <hr></hr>
                </Container>
                <Container>
                    <Row>
                    <Col lg={12} md={8} sm={6} xs={12}>
                        <p className="copyright-text">Copyright &copy; {(new Date().getFullYear())} All Rights Reserved by  
                    <Link to="/"> eduVue Technologies</Link>.
                        </p>
                    </Col>

                    <Col lg={12} md={8} sm={6} xs={12}>
                        <ul className="social-icons">
                        <li><Link className="facebook" to="/"><i class="fab fa-facebook"></i></Link></li>
                        <li><Link className="twitter" to="/"><i className="fab fa-instagram"></i></Link></li>
                           
                        </ul>
                    </Col>
                    </Row>
                </Container>
            </footer>

        </section>
    );
}

export default Footer;