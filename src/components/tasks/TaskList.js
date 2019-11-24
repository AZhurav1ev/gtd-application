import React from 'react'
import TaskSummary from './TaskSummary'

const TaskList = ({ tasks }) => {
    return(
    <>
        {tasks && tasks.map(task => {
            return (
                <TaskSummary task={task}  key={task.id}/>
            )
        })}
    </>
    )
}

export default TaskList;




