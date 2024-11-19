import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo_lg.webp';
import Image from 'react-bootstrap/Image';
import devbtn from '../assets/progport.jpg';
import artbtn from '../assets/illusport.jpg';

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Opening page for Griffin North's portfolio"
        />
        <title>Griffin North | Software Developer and Illustrator Portfolio</title>
      </Helmet>
      <Container fluid className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <Row>
          <Col>
            <Image src={logo} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>GRIFFIN NORTH</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Software Developer and Freelance Illustrator</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/dev" className='homebtn'>
              <Image src={devbtn} rounded />
              <div className="centered"><h2 className="link-primary">Developer</h2></div>
            </a>
          </Col>
          <Col>
            <a href="/art" className='homebtn'>
              <Image src={artbtn} rounded />
              <div className="centered"><h2 className="link-secondary">Illustrator</h2></div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home