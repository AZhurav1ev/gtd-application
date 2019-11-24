import {firestore} from '../../config/fbConfig';

export const createTask = (task) => {
    return (dispatch, getState) => {
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('tasks').add({
            ...task,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            priority: false,
            completed: false,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TASK', task })
        }).catch((err) => {
            dispatch({type: 'CREATE_TASK_ERROR', err })
        })

    }
}

export const changePriority = (task) => {
    return (dispatch) => {
        firestore.collection('tasks').doc(task.id).update({
            priority: ( task.priority === true) ? false : true,
            id: task.id
        }).then(() => {
            dispatch({ type: 'TASK_UPDATE', task})
        }).catch((err) => {
            dispatch({ type: 'TASK_UPDATE_ERR', err })
        })
    }
}

export const changeCompleting = (task) => {
    return (dispatch) => {
        firestore.collection('tasks').doc(task.id).update({
            completed: (task.completed === true ? false : true),
            id: task.id
        }).then(() => {
            dispatch({ type: 'TASK_COMPLETE', task})
        }).catch((err) => {
            dispatch({ type: 'TASK_COMPLETE_ERR', err })
        })
    }
}

export const deleteTask = (task) => {
    return (dispatch) => {
        firestore.collection('tasks').doc(task.id)
        .delete()
        .then(() => {
            dispatch({ type: 'DELETE_TASK', task })
        }).catch((err) => {
            dispatch({ type: 'DELETE_TASK_ERR', err })
        })
    }
}

export const updateTask = (task) => {
    return (dispatch) => {
        firestore.collection('tasks').doc(task.id).update({
            ...task,
            id: task.id
        }).then(() => {
            dispatch({ type: 'TASK_EDIT', task})
        }).catch((err) => {
            dispatch({ type: 'TASK_EDIT_ERR', err })
        })
    }
}




