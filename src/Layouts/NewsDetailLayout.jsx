import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import RightSideBar from '../Pages/Shared/RightSideBar/RightSideBar';

const NewsDetailLayout = () => {
    return (
        <div>
            <Header />
            <Container className='py-3'>
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightSideBar />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsDetailLayout;