import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { SignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignIn(email, password).then(e => {
            if (e.user) {
                navigate(from, { replace: true });
            }
        }).catch(er => console.log(er));
    }
    return (
        <Container className="">
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <div className=" bg-white p-5">
                        <h2 className="fs-3 fw-bold text-center">Login your account</h2>
                        <hr />
                        <Form onSubmit={handleFormSubmit} className='py-2'>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" className='py-2' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" className='py-2' />
                            </Form.Group>
                            <Button type='submit' variant='primary' className='w-100'>Login</Button>
                        </Form>
                        <p className='text-center'>Do not Have an Account ? <Link to='/register' className='text-danger text-decoration-none'>Register</Link></p>
                    </div>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    );
};

export default Login;