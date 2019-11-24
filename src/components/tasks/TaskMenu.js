import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TaskMenu = () => {
    return (
        <Container >
            <Row>
                <Col className="px-0 col-12">
                    <ListGroup variant="flush" className="shadow mt-md-3">
                        <ListGroup.Item variant="light" action as={Link} to="/" >
                            <h3 className="text-center text-uppercase font-weight-bold text-primary mx-0 my-0">Tasks</h3>
                        </ListGroup.Item>
                        <ListGroup.Item  variant="light" action as={Link} to="/create">
                            <h3 className="text-center text-uppercase font-weight-bold text-primary mx-0 my-0">Create</h3>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light" action as={Link} to="/priority">
                            <h3 className="text-center text-uppercase font-weight-bold text-primary mx-0 my-0">Priority</h3>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light" action as={Link} to="/completed">
                            <h3 className="text-center text-uppercase font-weight-bold text-primary mx-0 my-0">Completed</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TaskMenu