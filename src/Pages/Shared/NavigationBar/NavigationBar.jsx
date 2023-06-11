import { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log('header', user);
    const SignOut = () => {
        logout().then(() => { }).catch(err => console.error(err))
        console.log('clicked');
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container className="py-2">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className=" w-100">
                            <Nav className="d-flex justify-content-center gap-3 align-items-center">
                                <Link to="/" className='text-muted text-decoration-none'> Home</Link>
                                <Link to="/about" className='text-muted text-decoration-none'>About</Link>
                                <Link to="/career" className='text-muted text-decoration-none'>Career </Link>
                            </Nav>
                        </div>
                        <Nav>
                            <div className="d-flex justify-content-center gap-3 align-items-center">
                                {
                                    user ? <>
                                        <span className="fs-6">
                                            <Image src={user.photoURL} roundedCircle width={40} height={40} />
                                        </span>
                                        <Button variant='dark' onClick={SignOut}>LogOut</Button>
                                    </> : <>
                                        <RxAvatar className='fs-1' />
                                        <Link to='/login'>
                                            <Button variant='dark' >Login</Button>
                                        </Link>
                                    </>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;