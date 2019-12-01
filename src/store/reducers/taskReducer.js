const taskReducer = (state = {}, action) => {
    switch (action.type){
        case 'CREATE_TASK':
            console.log('created task: ', action.task);
            return state;
        case 'CREATE_TASK_ERROR':
            console.log('create task error: ', action.err);
            return state;
        case 'TASK_UPDATE':
            console.log('task updated: ', action.task);
            return state;
        case 'TASK_UPDATE_ERR':
            console.log('task update error: ', action.err.message);
            return state;
        case 'TASK_COMPLETE':
            console.log('task completed: ', action.task);
            return state;
        case 'TASK_COMPLETE_ERR':
            console.log('task complete error ' + action.err.message);
            return state;
        case 'DELETE_TASK':
            console.log('task deleted: ' + action.task);
            return state;
        case 'DELETE_TASK_ERR':
            console.log('delete task error ' + action.err.message);
            return state;
        case 'TASK_EDIT':
            console.log('task edited ' + action.task);
            return state;
        case 'TASK_EDIT_ERR':
            console.log('task edit err ' + action.err.message);
            return state;
        default:
            return state;
    } 
}

export default taskReducer;
