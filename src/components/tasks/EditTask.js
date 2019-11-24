import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import TaskMenu from './TaskMenu'
import { updateTask } from '../../store/actions/taskActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class EditTask extends React.Component {
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
        const { task } = this.props;
        task.title =  this.state.title || task.title;
        task.content = this.state.content || task.content;
        task.id = this.props.match.params.id;
        this.props.updateTask(task);
        this.props.history.push('/');
    }

    render() {
        const { auth, task } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />
        return (
            <Container className="mt-4">
                <Row>
                    <Col className="col-12 col-md-4 col-lg-3">
                        <TaskMenu />
                    </Col>
                    <Col className="col-12 col-md-8 col-lg-9">
                        <Row className="justify-content-center mt-3">
                            <Col>
                                <Form onSubmit={this.handleSubmit} className="bg-white p-3 border border-light">
                                    <p className="h2 font-weight-bold text-primary">Edit Task</p>
                                    <Form.Group>
                                        <Form.Control type="text" id="title" placeholder={task.title} onChange={this.handleChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control as="textarea" rows="5" id="content" placeholder={task.content} onChange={this.handleChange} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit"    
                                        onClick={this.handleSubmit}
                                    >Edit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const tasks = state.firestore.data.tasks;
    const task = tasks ? tasks[id] : null;
    return {
        task: task,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (task) => dispatch(updateTask(task)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'tasks' }
    ]),
)(EditTask)