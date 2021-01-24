import React from 'react';

const TaskSingle = (props) => {
    const task = props.task;
    const index = props.index;

    return ( 
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>
                {
                    task.status === "pending" &&
                    <span className="badge-info">Pending</span>
                }
                {
                    task.status === "done" &&
                    <span className="badge-success">Done</span>
                }
            </td>
        </tr>
    );
}
 
export default TaskSingle;