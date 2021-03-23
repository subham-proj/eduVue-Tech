import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'


function twoPoint(props) {
    return (
        <div className="twoPoint">
            <Container>
                <h1 style={{textAlign:"center",fontWeight:"bold"}}>What is the problem we are solving</h1>
                
                <Row style={{paddingTop:"50px"}}>
                

                <Col lg={6} md={6} sm={12} xs={12}>
                <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_TBKozE.json"  background="transparent"  speed="1"  style={{width:"100%",height:"100%"}}  loop  autoplay></lottie-player>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                    <b>There are lot of free CRMs in market however they don’t address Education Industry
                    specific problems listed below.</b>
                    <br></br><br></br>
                    <p style={{fontWeight:"bold"}}>Educational Institutes:</p>
                    <ol style={{paddingLeft:"15px"}} className="problemFont">
                        <li>Apart from big players, small players work on very thin margins to operate their institutes</li>
                        <li>Hence when it comes to technology, even after knowing its benefits, they lack investment
                        capability and technology know-how to implement the same and reap benefits</li>
                        <li>Multiple tools for managing business. Increases cost of managing different tools and reduces
                        efficiencies. Integration between different tools are also not easy.</li>
                        <li>Not able to analyse student’s performance and thereby a teacher’s efficiency</li>
                        <li>Increase reach out to new students</li>
                    </ol>

                </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12}> 
                        <p style={{fontWeight:"bold"}}>Teachers of these Institutes:</p>

                        <ol style={{paddingLeft:"15px"}} className="problemFont">
                        <li>Most of the teachers using blackboard to explain concepts. In such cases sharing, storing and
                        managing their classroom notes becomes tedious</li>
                        <li>They spend lot of time evaluating physical answer sheet of students instead of focusing on
                        student learning</li>
                        <li>During a class session, they are unable to quickly identify if students have understood the
                        concept or not</li>
                        <li>Not able to track student performance with detailed insights</li>
                        </ol>
                    </Col>

                    <Col lg={6} md={12} sm={12} xs={12}> 
                        <p style={{fontWeight:"bold"}}>Students of these Institutes:</p>
                        <ol style={{paddingLeft:"15px"}} className="problemFont">
                            <li>They spend maximum time of classroom in copying what teacher has written on the board
                            rather than spending time in understanding the concept.</li>
                            <li>In case they miss a class or 2, have to depend on other students for notes and concept
                            clearance</li>
                        </ol>
                    </Col>
                </Row>

                <h1 style={{textAlign:"center",fontWeight:"bold",paddingTop:"60px"}}>The uniqueness of our solution</h1>
                <p style={{fontWeight:"bold",paddingTop:"50px"}}>Following are the features which together solve the problem listed above :</p>
                <p style={{fontWeight:"bold"}}>Features :</p>

                <ol style={{paddingLeft:"15px"}} className="problemFont"> 
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12}> 
                            <li>Enquiry Management</li>
                            <li>Sales Team Management</li>
                            <li>Customer Care & Ticketing system</li>
                            <li>Institute Website creation & management tool</li>
                            <li>Staff and Student Attendance Management</li>
                                <ul className="problemFont" style={{paddingLeft:"25px"}}>
                                    <li>Biometric attendance system</li>
                                </ul>
                   

                            
                            <li>Invoice & Expense Tracking and Management
                                <ul className="problemFont" style={{paddingLeft:"25px"}}>
                                    <li>Automated payment reminders to students</li>
                                    <li>Staff salary disbursal system</li>
                                    <li>Current P&L statement for month, year</li>
                                    <li>Expense tracking</li>
                                </ul>
                            </li>
                            
                    </Col>

                    <Col lg={6} md={12} sm={12} xs={12}> 
                            <li>Learning Management System</li>
                            <li>Online assessment tool</li>
                            <li>Question Bank Management System</li>
                            <li>Mock Test Platform for students to practise for various exams</li>

                            <li>Analytic Reporting System</li>
                            <li>SMS & Email Campaign Module (Marketing Tool)</li>
                            <li>Mobile application for students to access course content of the Coaching Institute</li>
                    </Col>
                </Row>
                </ol>

            </Container>

        </div>
    )
}

export default twoPoint
