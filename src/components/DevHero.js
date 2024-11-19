import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HeroImage from '../assets/devImages/GN_heroImg.png';
import Image from 'react-bootstrap/Image';
import background from '../assets/devImages/circuit_bg.png';

const DevHero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const devTypes = ["Software Developer", "Web Developer", "Game Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % devTypes.length;
        let fullText = devTypes[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='devhero' id='hero' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat-x' }}>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <h1>{`Hi! I'm Griffin North:`}<br/><span className='wrap'>{text}</span></h1>
                        <p>
                            Griffin North is a graduate from the University of Calgary with a Bachelor in
                            Science (Computer Science). As a new developer from Alberta, Griffin has worked
                            roughly 3 years in the industry: 2 years as a junior developer for Phoenix Technology
                            Services, and 1 year as a junior developer for Navigator Games.
                        </p>
                        <p>
                            Currently, Griffin is looking for more opportunities to utilize their software
                            development skills and grow as a developer.
                        </p>
                        <Button variant="primary" href="#contact">CONTACT</Button>{` `}<Button variant="outline-primary" href="https://www.linkedin.com/in/griffinnorth/">LINKEDIN</Button>{` `}<Button variant="outline-primary" href="https://github.com/griffinsbnorth">GITHUB</Button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <Image src={HeroImage} fluid/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DevHero