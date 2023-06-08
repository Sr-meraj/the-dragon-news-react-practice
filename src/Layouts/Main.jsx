import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSideBar from "../Pages/Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../Pages/Shared/RightSideBar/RightSideBar";

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftSideBar />
                    </Col>
                    <Col lg={6}>
                        <h1>Main content</h1>
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

export default Main;