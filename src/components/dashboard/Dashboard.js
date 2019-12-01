import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import TaskList from '../tasks/TaskList'
import TaskMenu from '../tasks/TaskMenu'
import CreateFirstTask from '../tasks/CreateFirstTask'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    render() {
        const { tasks, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        if (!tasks) return (
            <Container>
                <Row className="mt-3 justify-content-center">
                    <Col sm={12} md={3} className="mt-3">
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                    </Col>
                </Row>
            </Container>
        )
        return (
            <Container>
                <Row className="mt-3">
                    <Col className="col-12 col-md-4 col-lg-3">
                        <TaskMenu />
                    </Col>
                    <Col className="col-12 col-md-8 col-lg-9">
                        {(tasks && tasks.length) ? <TaskList tasks={tasks} /> : <CreateFirstTask />}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const tasks = state.firestore.ordered.tasks;
    const userId = state.firebase.auth.uid;
    if (tasks) {
        var userTasks = tasks.filter((task) => {
            return (task.authorId === userId && task.completed === false);
        })
        userTasks.sort((a,b) => b.createdAt.seconds - a.createdAt.seconds);
    }
    return {
        tasks: userTasks,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks' }
    ])
)(Dashboard)


