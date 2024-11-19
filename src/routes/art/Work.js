import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import background from '../../assets/artImages/bgpattern.png';

const Work = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="List of all Griffin North's illustrative work"
                />
                <title>Griffin North | Illustrator: List Of Work</title>
            </Helmet>
            <NavBar />
            <Container fluid className='text-center' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat-x', paddingTop: '50px' }}>
                <Row>
                    <Col className="col-7">
                        <h1>Work</h1>
                        <Button variant="outline-secondary" href="/art/illustration"><h2>Illustration</h2></Button><br/><br/>
                        <Button variant="outline-secondary" href="/art/chardesign"><h2>Character Design</h2></Button><br/><br/>
                        <Button variant="outline-secondary" href="/art/envdesign"><h2>Environment Design</h2></Button><br/><br/>
                        <Button variant="outline-secondary" href="/art/bookcover"><h2>Book Cover</h2></Button><br/><br/>
                        <Button variant="outline-secondary" href="/art/lineart"><h2>Line Art</h2></Button><br/><br/>
                        <Button variant="outline-secondary" href="/art/commissions"><h2>Commission Samples</h2></Button><br/><br/><br/>
                    </Col>
                    <Col>
                    <h2>Comics</h2>
                        <Button variant="outline-secondary" href="/art/ac"><h3>Apocalypse Child</h3></Button><br/><br/>
                        <Button variant="outline-secondary" href="/art/tst"><h3>Tora Steals Things</h3></Button><br/><br/>
                    </Col>
                </Row>
            </Container>
            <Footer type="art" />
        </div>
    )
}

export default Work