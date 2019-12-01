import React from 'react'
import TaskMenu from './TaskMenu'
import { Container, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'
import { changePriority, changeCompleting } from '../../store/actions/taskActions'

const TaskDetails = (props) => {
    const { task, auth } = props;
    task.id = props.match.params.id;
    if (!auth.uid) return <Redirect to="/signin" />
    if (task) {
        return (
            <Container>
                <Row className="mt-3">
                    <Col className="col-12 col-md-4 col-lg-3">
                        <TaskMenu />
                    </Col>
                    <Col className="col-12 col-md-8 col-lg-9">
                        <Container className="shadow">
                            <Row className="mt-3 bg-white">
                                <Col className="mt-2 mr-md-1 text-md-right text-center" >
                                    <img src={`/img/${task.priority ? "FullStar" : "EmptyStar"}.png`} alt="star" onClick={() => props.changePriority(task)} style={{ height: 30, cursor: "pointer" }} />
                                    <Link to={`/edit/${task.id}`}>
                                        <img src="/img/Edit_100px.png" alt="edit" className="ml-md-1 ml-3" style={{ height: 30 }} />
                                    </Link>
                                    <img src="/img/Delete.png" alt="delete" onClick={() => { props.changeCompleting(task) }} className="ml-md-1 ml-3" style={{ height: 30, cursor: "pointer" }} />
                                </Col>
                            </Row>
                            <Link className="text-decoration-none" to={`/task/${task.id}`} >
                                <Row className="bg-white mt-md-n4 pt-3 pt-sm-2 text-md-left text-center" >
                                    <Col className="col-md-10 col-sm">
                                        <p className="text-primary font-weight-bold h4">{task.title}</p>
                                    </Col>
                                </Row>
                                <Row className="bg-white" >
                                    <Col className="text-md-left text-center">
                                        <p className="text-justify text-dark">{task.content}</p>
                                    </Col>
                                </Row>
                                <Row className="bg-white">
                                    <Col className="text-md-left text-center">
                                        <p className="text-muted">Posted: {moment(task.createdAt.toDate()).calendar()}</p>
                                    </Col>
                                </Row>
                            </Link>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row className="mt-3">
                    <Col sm={12} md={3}>
                        <TaskMenu />
                    </Col>
                    <Col sm={12} md={9}>
                        <Row>
                            <Col className="text-center mt-3">
                                <p>Task is loading</p>
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
        changePriority: (task) => dispatch(changePriority(task)),
        changeCompleting: (task) => dispatch(changeCompleting(task))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'tasks' }
    ]),
)(TaskDetails)
