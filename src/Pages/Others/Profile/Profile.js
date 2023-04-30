import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Profile = () => {

    const [name, setName] = useState('');
    const { user } = useContext(AuthContext);
    const photoURLRef = useRef(user.photoURL);
    useTitle('profile');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(photoURLRef.current.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={user?.displayName} type="text" placeholder="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;