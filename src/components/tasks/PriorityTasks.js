import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TaskMenu from './TaskMenu'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import TaskList from '../tasks/TaskList'

class PriorityTasks extends React.Component {
    render() {
        const { tasks, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <Container>
                <Row className="mt-3">
                    <Col className="col-12 col-md-4 col-lg-3">
                        <TaskMenu />
                    </Col>
                    <Col className="col-12 col-md-8 col-lg-9">
                     {(tasks && tasks.length) ? <TaskList tasks={tasks} /> : 
                     <h4 className="mt-4 text-muted"> You don't have priority tasks.</h4>}
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
            return (task.authorId === userId && task.priority && !task.completed)
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
)(PriorityTasks)


