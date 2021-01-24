import React, { useEffect, useState } from 'react';
import TaskSingle from './TaskSingle';

const TaskList = () => {
    // const tasks = [
    //     'First Task',
    //     'Second Task',
    //     'Third Task',
    // ]

    const [tasks, setTasks] = useState([
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
    ])

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

    const changeTaskStatus = (index) => {
        // Change Status
        const updatedTasks = [];
        tasks.map((task, idx) => {
            if(idx === index){
                task.status = task.status === 'pending' ? 'done' : 'pending';
            }
            updatedTasks.push(task);
        });
        setTasks(updatedTasks);
    }

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
                                <TaskSingle 
                                task={task} 
                                index={index} 
                                key={index} 
                                changeTaskStatus={changeTaskStatus}
                                />
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