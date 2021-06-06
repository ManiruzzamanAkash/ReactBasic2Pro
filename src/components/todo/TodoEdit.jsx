import React, { useState } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const TodoEdit = ({ onUpdateTodo, todo, index }) => {

    const [title, setTitle] = useState(todo.title);
    const [status, setStatus] = useState(todo.status);

    const updateTodo = () => {
        if (title.length > 0) {
            const todo = {
                title,
                status
            }
            onUpdateTodo({
                index,
                todo
            });
        }
    }

    const handleEnterSubmission = (e) => {
        if (e.key === "Enter") {
            updateTodo();
        }
    }

    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder=" Enter Todo"
                aria-label=" Enter Todo"
                aria-describedby="basic-addon2"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => handleEnterSubmission(e)}
                style={{ width: '300px' }}
            />

            &nbsp; &nbsp;

            <select name="status" id="status" value={status}
                onChange={e => setStatus(e.target.value)}
            >
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
            </select>

            &nbsp; &nbsp;

            <Button variant="success" id="button-addon2" onClick={e => updateTodo()}>
                <FontAwesomeIcon icon={faCheckSquare} /> Save
            </Button>
        </InputGroup>
    );
}

export default TodoEdit;