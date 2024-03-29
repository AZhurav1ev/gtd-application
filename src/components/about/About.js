import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import TaskMenu from '../tasks/TaskMenu'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const About = (props) => {
    const { auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />;
    return (
        <Container>
            <Row className="mt-3">
                <Col className="col-12 col-md-4 col-lg-3">
                    <TaskMenu />
                </Col>
                <Col className="col-12 col-md-8 col-lg-9">
                    <Row className="mt-5 mt-md-3 col-12">
                        <Col>
                            <h4 className="text-center text-primary">Welcome to Get thigs done application</h4>
                        </Col>
                        <Col className="col-12">
                            <p className="text-center text-muted">This application was created with usage of:</p>
                        </Col>
                        <Col className="col-12">
                            <p className="text-center text-uppercase font-weight-bold text-muted" >React + React Router + Redux + Firebase + React Bootstrap</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="/img/React.png" alt="React" height="100"/>
                            <img src="/img/React-router.png" alt="React-router" height="100" className="ml-3"/>
                            <img src="/img/Redux.png" alt="Redux" height="100" className="ml-3" />
                            <img src="/img/Firebase.png" alt="Firebase" height="100" className="ml-3" />
                            <img src="/img/React-bootstrap.png" alt="React-bootstrap" height="100" className="ml-3" />
                        </Col>
                    </Row>
                    <Row className="mt-3" >
                        <Col className="col-12">
                            <p className="text-center text-muted">
                                Also, you could review this app or pick it apart by downloading the code from <a href="https://github.com/AZhurav1ev/gtd-application">GitHub</a>   
                            </p>
                        </Col>
                        <Col className="col-12 mt-3">
                            <h4 className="text-center text-muted">Thank you for visit!</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(About);