import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackBtnNavBar from '../components/BackBtnNavBar';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <Container>
      <Helmet>
        <meta
          name="description"
          content="This page doesn't exist"
        />
        <title>Griffin North | 404 </title>
        <meta name="robots" content="none" />
      </Helmet>
      <BackBtnNavBar />
      <Row>
        <Col>
          <h2>This page doesn't exist, sorry</h2>
          <p>How did you even get here...?</p>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound