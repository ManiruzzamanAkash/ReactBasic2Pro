import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';

const Contact = ({ label = 'Contact Us' }) => {

    const [subject, setSubject] = useState('Default Subject');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');
    const [terms, setTerms] = useState('');

    const reasons = [
        { value: 'account_inactive', label: 'Account Inactive' },
        { value: 'account_active', label: 'Account Active' },
        { value: 'account_ban', label: 'Account Ban' },
        { value: 'other', label: 'Other' },
    ]

    const changeInput = (stateName, stateValue) => {
        switch (stateName) {
            case "subject":
                setSubject(stateValue);
                break;

            case "name":
                setName(stateValue);
                // Check duplicacy of this name
                break;

            case "email":
                setEmail(stateValue);
                break;

            case "message":
                setMessage(stateValue);
                break;

            case "reason":
                setReason(stateValue);
                break;

            case "terms":
                setTerms(stateValue);
                break;

            default:
                break;
        }
    }

    console.log(subject, name, email, message, reason, terms);

    return (
        <Form className="card card-body p-5 m-5">
            <h2 className="mb-4">{label}</h2>

            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    onChange={e => changeInput("subject", e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={e => changeInput("name", e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => changeInput("email", e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="reason">
                <Form.Label>Reason</Form.Label>
                <Select
                    options={reasons}
                    isClearable={true}
                    onChange={value => changeInput("reason", value)}
                />
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    type="text" 
                    placeholder="Enter your message" 
                    onChange={e => changeInput("message", e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="terms">
                <Form.Check 
                    type="checkbox" 
                    label="Read Terms and Service"
                    onChange={() => changeInput("terms", terms ? false : true )}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Contact;