import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TaskMenu from './TaskMenu'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import CompletedTaskSummary from '../tasks/CompletedTaskSummary'

const CompletedTasks = (props) => {
    const { tasks, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <Container>
            <Row className="mt-3">
                <Col className="col-12 col-md-4 col-lg-3">
                    <TaskMenu />
                </Col>
                <Col className="col-12 col-md-8 col-lg-9">
                    {(tasks && tasks.length) ? tasks.map(task => <CompletedTaskSummary task={task} key={task.id}/>) :
                        <h4 className="mt-4 text-muted"> You don't have completed tasks yet.</h4>}
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const tasks = state.firestore.ordered.tasks;
    const userId = state.firebase.auth.uid;
    if (tasks) {
        var userTasks = tasks.filter((task) => {
            return (task.authorId === userId && task.completed === true)
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
        { collection: 'tasks', ordereBy: ['createdAt', 'desc'] },
    ])
)(CompletedTasks)