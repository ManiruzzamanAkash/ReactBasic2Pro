import React from 'react';

const TaskSingle = (props) => {
    const task = props.task;
    const index = props.index;

    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                {task.status === "pending" ? task.title : <del>{task.title}</del>}
            </td>
            <td>
                <div onClick={() => props.changeTaskStatus(index)}>
                    {
                        task.status === "pending" &&
                        <span className="badge-info">Pending</span>
                    }
                    {
                        task.status === "done" &&
                        <span className="badge-success">Done</span>
                    }
                </div>
            </td>
        </tr>
    );
}

export default TaskSingle;