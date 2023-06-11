import { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createAccout, updateProfileInfo, emailVerification } = useContext(AuthContext)
    const [accept, setAccept] = useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo_url.value;
        const Name = form.name.value;

        createAccout(email, password)
            .then(result => {
                emailVerification(result.user)
                updateProfileInfo(Name, photoUrl)
                    .then(e => { console.log(e) })
                    .catch(e => { console.error(e); })
                console.log(result.user);
                form.reset()
            })
            .catch(err => console.error(err))
    }

    const handelAccepted = (e) => {
        setAccept(e.target.checked)
    }
    return (
        <Container className="">
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <div className=" bg-white">
                        <h2 className="fs-3 fw-bold text-center">Register your account</h2>
                        <hr />
                        <Form onSubmit={handleFormSubmit} className='py-2'>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter your Name" className='py-2' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Photo Url</Form.Label>
                                <Form.Control type="url" name='photo_url' placeholder="Enter your Photo Url" className='py-2' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" className='py-2' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" className='py-2' />
                            </Form.Group>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" onChange={handelAccepted}
                                    label={<>Accept <Link to="/terms">Term & Conditions</Link></>} />
                            </Form.Group>
                            <Button type='submit' variant='primary' disabled={!accept} className='w-100'>Register</Button>
                        </Form>
                        <p className='text-center'>Already Have an Account ? <Link to='/login' className='text-danger text-decoration-none'>Login</Link></p>
                    </div>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    );
};

export default Register;