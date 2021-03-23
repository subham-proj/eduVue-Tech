import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {Container, Row, Col} from 'react-bootstrap';

function Count() {
    return (
        <div className="count">
        <Container>
            <Row style={{textAlign:"center"}}>
                <Col className="px-3 count-font" >
                <h3>Educational Institutes across India</h3>
                <h1>
                <CountUp start={0} end={125000} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp> +
                </h1>
                </Col>

                <Col className="px-3 count-font">
                <h3>Total industry size of</h3>
                <h1>
                <CountUp start={0} end={5000} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp> + <span style={{fontSize:"25px"}}>Cr</span>
                </h1>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Count
