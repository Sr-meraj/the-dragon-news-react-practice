import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideBar from "../Pages/Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../Pages/Shared/RightSideBar/RightSideBar";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftSideBar />
                    </Col>
                    <Col lg={6}>
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

export default Main;