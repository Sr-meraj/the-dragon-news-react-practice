import { Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className=''>
            <div className='text-center '>
                <img src={logo} alt="The Dragon News" />
                <h4 className='my-3 fs-5'>Journalism Without Fear or Favour</h4>
                <p className='fs-4'>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-body-secondary p-3  gap-2'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={50} className='text-danger fs-6'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain — as it happened
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;