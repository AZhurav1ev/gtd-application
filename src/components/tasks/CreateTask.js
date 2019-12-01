import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import TaskMenu from './TaskMenu'
import { createTask } from '../../store/actions/taskActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateTask extends React.Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />
        return (
            <Container className="mt-3">
                <Row>
                    <Col className="col-12 col-md-4 col-lg-3">
                        <TaskMenu />
                    </Col>
                    <Col className="col-12 col-md-8 col-lg-9">
                        <Row className="justify-content-center mt-3">
                            <Col>
                                <Form onSubmit={this.handleSubmit} className="bg-white p-3 border border-light shadow">
                                    <p className="h2 font-weight-bold text-primary text-center text-md-left">Create task</p>
                                    <Form.Group>
                                        <Form.Control type="text" id="title" placeholder="Task title" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control as="textarea" rows="5" id="content" placeholder="Task Content" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Button className="w-100" variant="success" size="lg" type="submit">Create</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);