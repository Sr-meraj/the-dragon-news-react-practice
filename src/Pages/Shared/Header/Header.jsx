import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment'
import { RxAvatar } from 'react-icons/rx'
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='py-5'>
            <div className='text-center '>
                <img src={logo} alt="The Dragon News" />
                <h4 className='my-3 fs-5'>Journalism Without Fear or Favour</h4>
                <p className='fs-4'>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-body-secondary p-3  gap-2'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={50} className='text-danger fs-6'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain — as it happened.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">
                                <RxAvatar className='fs-1' />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#">
                                <Button variant='dark'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;