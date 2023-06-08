import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>

            <Navbar.Brand className='text-center'>
                <img src={logo} alt="The Dragon News" />
            </Navbar.Brand>

            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;