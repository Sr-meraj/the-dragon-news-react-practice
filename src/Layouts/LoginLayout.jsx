import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const LoginLayout = () => {
    return (
        <Container>
            <Row>
                <NavigationBar />
                <Outlet />
            </Row>
        </Container>
    );
};

export default LoginLayout;