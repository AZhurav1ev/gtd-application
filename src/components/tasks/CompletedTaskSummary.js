import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import moment from 'moment'
import { connect } from 'react-redux'
import { changeCompleting, deleteTask } from '../../store/actions/taskActions'

const CompletedTaskSummary = (props) => {
    const { task } = props;
    return (
        <Container className="shadow">
            <Row className="mt-3 bg-white">
                <Col className="mt-2 mr-md-1 text-md-right text-center" >
                    <img src="/img/Restore.png" alt="restore" onClick={() => props.changeCompleting(task)} style={{ height: 30, cursor: "pointer" }} />
                    <img src="/img/Delete_bin.png" alt="delete" onClick={() => props.deleteTask(task)} className="ml-md-1 ml-sm-3" style={{ height: 30, cursor: "pointer" }} />
                </Col>
            </Row>
            <Row className="bg-white mt-md-n4 pt-sm-2 text-md-left text-center" >
                <Col className="col-md-10 col-sm">
                    <p className="text-primary font-weight-bold h4">{task.title}</p>
                </Col>
            </Row>
            <Row className="bg-white">
                <Col className="text-md-left text-center">
                    <p className="text-muted">Posted: {moment(task.createdAt.toDate()).calendar()}</p>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCompleting: (task) => dispatch(changeCompleting(task)),
        deleteTask: (task) => dispatch(deleteTask(task))
    }
}

export default connect(null, mapDispatchToProps)(CompletedTaskSummary);
