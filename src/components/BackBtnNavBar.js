import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_sm.webp';
import Image from 'react-bootstrap/Image';

const BackBtnNavBar = () => {
    const navigate = useNavigate();
    console.log(navigate);

    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container>
                <Button variant="info" onClick={() => navigate(-1)}>BACK</Button>
                <Navbar.Brand href="/">
                    <Image src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top" />{' '}
                    GRIFFIN NORTH
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default BackBtnNavBar