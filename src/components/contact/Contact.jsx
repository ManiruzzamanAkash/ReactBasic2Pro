import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import { useForm } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';

import { getEmailValidationPattern } from '../../utils/Patterns';
import './contact.css';

const Contact = ({ label = 'Contact Us' }) => {

    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

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

    const onSubmitContactForm = async (data) => {
        alert('Submitting Contact form');

        console.log(`data`, data);

        // await axios.post('https://test.com', data)
        // .then(res => {
            
        // })
    }

    console.log(subject, name, email, message, reason, terms);

    return (
        <Form className="card card-body p-5 m-5" onSubmit={handleSubmit(onSubmitContactForm)}>
            <h2 className="mb-4">{label}</h2>

            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    onChange={e => changeInput("subject", e.target.value)}
                    className={ errors.subject && 'is-invalid' }
                    {...register("subject", { 
                        required: true,
                        minLength: 5,
                        maxLength: 50
                    })}
                />
                {
                    errors.subject && 
                    <span className="text-danger">
                        { errors.subject.type === 'required' && 'Please give subject' }
                        { errors.subject.type === 'minLength' && 'Please give subject minimum of 5 characters' }
                        { errors.subject.type === 'maxLength' && 'Please give subject maximum of 50 characters' }
                    </span>
                }
            </Form.Group>

            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={e => changeInput("name", e.target.value)}
                    className={ errors.name && 'is-invalid' }
                    {...register("name", { 
                        required: true,
                        minLength: 3,
                        maxLength: 50
                    })}
                />
                {
                    errors.name && 
                    <span className="text-danger">
                        { errors.name.type === 'required' && 'Please give name' }
                        { errors.name.type === 'minLength' && 'Please give name minimum of 3 characters' }
                        { errors.name.type === 'maxLength' && 'Please give name maximum of 50 characters' }
                    </span>
                }
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => changeInput("email", e.target.value)}
                    className={ errors.email && 'is-invalid' }
                    {...register("email", { 
                        required: true,
                        pattern: getEmailValidationPattern()
                    })}
                />
                {
                    errors.email && 
                    <span className="text-danger">
                        { errors.email.type === 'required' && 'Please give email address' }
                        { errors.email.type === 'pattern' && 'Please give a valid email address' }
                    </span>
                }
            </Form.Group>

            <Form.Group controlId="reason">
                <Form.Label>Reason</Form.Label>
                <RHFInput
                    as={<Select options={reasons} isClearable={true} />}
                    rules={{ required: true }}
                    name="reason"
                    onChange={value => changeInput("reason", value)}
                    className={errors.reason && 'border-danger'}
                    register={() => 
                        register("reason", { 
                            required: true
                        })
                    }
                    setValue={setValue}
                />
                {
                    errors.reason && 
                    <span className="text-danger">
                        { errors.reason.type === 'required' && 'Please give reason' }
                    </span>
                }
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    type="text" 
                    placeholder="Enter your message" 
                    onChange={e => changeInput("message", e.target.value)}
                    className={ errors.message && 'is-invalid' }
                    {...register("message", { 
                        required: true,
                        minLength: 5,
                        maxLength: 500
                    })}
                />
                {
                    errors.message && 
                    <span className="text-danger">
                        { errors.message.type === 'required' && 'Please give message' }
                        { errors.message.type === 'minLength' && 'Please give message minimum of 5 characters' }
                        { errors.message.type === 'maxLength' && 'Please give message maximum of 500 characters' }
                    </span>
                }
            </Form.Group>

            <Form.Group controlId="terms">
                <Form.Check 
                    type="checkbox" 
                    label="Read Terms and Service"
                    onChange={() => changeInput("terms", terms ? false : true )}
                    className={ errors.terms && 'is-invalid' }
                    {...register("terms", { 
                        required: true
                    })}
                />
                {
                    errors.terms && 
                    <span className="text-danger">
                        { errors.terms.type === 'required' && 'Please read terms and check' }
                    </span>
                }
            </Form.Group>

            <Button variant="primary" type="submit">
                <i className="fa fa-send"></i> Submit
            </Button>
        </Form>
    );
}

export default Contact;