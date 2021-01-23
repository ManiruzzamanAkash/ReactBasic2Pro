import React, { useEffect } from 'react';

const TaskList = () => {
    // const tasks = [
    //     'First Task',
    //     'Second Task',
    //     'Third Task',
    // ]

    const tasks = [
        {
            id: 1,
            title: 'Complete map() of Javascript',
            status: 'done'
        },
        {
            id: 2,
            title: 'Display List in View',
            status: 'pending'
        },
        {
            id: 3,
            title: 'Final Video Tutorial',
            status: 'pending'
        }
    ]

    useEffect(() => {
        for (let index = 0; index < tasks.length; index++) {
            const task = tasks[index];
            console.log('for  --> ' + task);
        }

        tasks.forEach(task => {
            console.log('foreach  --> ' + task);
        });

        tasks.map((task, index) => {
            console.log('map  --> ' + task);
        });
    }, []);

    return (
        <div>
            {
                tasks.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => (
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
                            ))
                        }
                    </tbody>
                </table>
            }

            {
                tasks.length === 0 &&
                <div>
                    Sorry ! No Task Found !!
                </div>
            }

            {/* <ul>
                {
                   tasks.map((task, index) => (
                    <li key={task.id}>
                        {task.title} - <strong>{task.status}</strong>
                    </li>
                   )) 
                }
            </ul> */}
        </div>
    );
}

export default TaskList;