import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HeroImage from '../assets/artImages/GN_heroImgart.png';
import Image from 'react-bootstrap/Image';
import background from '../assets/artImages/bgpattern.png';

const ArtHero = () => {
    return (
        <section className='arthero' id='arthero' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat-x' }}>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <h1>Hey, I'm Griffin North</h1>
                        <p>
                            I'm a Canadian freelance illustrator and webcomic artist. I currently run
                            a modern fantasy webcomic about the end of the world, called Apocalypse Child, which launched in December of 2023 and is still
                            running. My previous webcomic, Tora Steals Things, ran from March 2016 to December 2023.
                        </p>
                        <p>
                            While mainly self-taught as an artist, I also have a Diploma in Game Design from the
                            Art Institute of Vancouver-Burnaby, and a Degree in Computer Science from the
                            University of Calgary.
                        </p>
                        <p>
                            <b>I do a variety of work from illustration to character commissions. Go check it out!</b>
                        </p>
                        <Button variant="secondary" href="/art/work">VIEW WORK</Button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <Image src={HeroImage} fluid/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ArtHero