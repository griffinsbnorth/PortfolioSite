import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaPatreon, FaInstagram, FaTumblrSquare, FaTwitterSquare, FaYoutube, FaGithubSquare } from "react-icons/fa";

const Footer = (props) => {
    let linkClass = "link-secondary";
    if (props.type === "dev") {
        linkClass = "link-primary";
    }

    let footerText = (
        <Col>
            <a href="/privacy" className={linkClass}>PRIVACY POLICY</a>
            <p>&copy; Copyright 2022</p>
            <p>
                Built by <a href="https://www.linkedin.com/in/griffinnorth/" target="_blank" rel="noreferrer" className={linkClass} >Griffin North</a>
            </p>
        </Col>
    )

    if (props.type === "dev") {
        return (
            <Container className="container text-center">
                <Row>
                    <Col>
                        <a href="https://www.linkedin.com/in/griffinnorth/" className="link-primary"><FaLinkedin /></a>{' '}
                        <a href="https://github.com/griffinsbnorth" className="link-primary"><FaGithubSquare /></a>{' '}
                    </Col>
                </Row>
                <Row>
                    {footerText}
                </Row>
            </Container>
        )
    } else {
        return (
            <Container className="container text-center">
                <Row>
                    <Col>
                        <a href="http://www.instagram.com/griffinsbnorth" className="link-secondary"><FaInstagram /></a>{' '}
                        <a href="http://patreon.com/griffinnorth" className="link-secondary"><FaPatreon /></a>{' '}
                        <a href="https://griffinnorth.tumblr.com/" className="link-secondary"><FaTumblrSquare /></a>{' '}
                        <a href="https://twitter.com/GriffinSBNorth" className="link-secondary"><FaTwitterSquare /></a>{' '}
                        <a href="https://www.youtube.com/@griffin_north" className="link-secondary"><FaYoutube /></a>{' '}
                    </Col>
                </Row>
                <Row>
                    {footerText}
                </Row>
            </Container>
        )
    }
}

export default Footer