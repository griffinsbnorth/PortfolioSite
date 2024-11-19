import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaPatreon } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ACComic = () => {
    let acData = require("../../assets/db/acPages.json");
    let acDesignData = require("../../assets/db/acDesign.json");
    let acSplashData = [
        {
            "id": 0,
            "title":"Apocalypse Child Promo 2",
            "size": "1195-1685",
            "src": "apocalypse_child_promo2.webp",
            "thumb": "AC_icon.webp"
        }
    ];

    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's project page describing their comic, Apocalypse Child, with sample work"
                />
                <title>Griffin North | Apocalypse Child Comic</title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='ac'>
                <h2>Comic: Apocalypse Child (2023-Current)</h2>
                <Container>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-center'>
                            <div className="iframecontainer">
                                <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/MkfCiwpgYmw?si=iYKQscdiC3koep7_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Gallery items={acSplashData} />
                        </Col>
                        <Col>
                            <p><b>A nerdy archeologist, who wants to be a father, tries to raise a strange kid who might bring the world to ruin.</b></p>
                            <p>
                                <b>Apocalypse Child</b> is a story about Thunder, a mysterious and terrifyingly powerful
                                boy who may be the most dangerous creature alive; Buzz Clarwin, the nerdy archeologist
                                trying desperately to raise him as his own out of the kindness of his heart; and Roy
                                Ilzura, a runaway Prince and the archeologist's best friend who is trying to save him
                                from his newfound "son."
                            </p>
                            <p>
                                The three travel the world together-trying to piece together the mystery behind Thunder
                                while exploring ancient magic ruins, fending off assailants from a secret society
                                hellbent on murdering the boy, and discovering hidden truths about their world's
                                long dead Gods.
                            </p>
                            <p>
                                -----------
                            </p>
                            <p>
                                <b>Apocalypse Child</b> is currently releasing a page every second thursday over at its own <a href="https://apocalypsechildcomic.com">official site.</a> I release
                                pages early over on the comic's Patreon, where we're currently over 20 pages ahead of the public release.
                            </p>
                            <Button variant="secondary" href="https://apocalypsechildcomic.com/"><CgWebsite />{'  '}Read on Official Site</Button>{` `}
                            <Button variant="secondary" href="https://www.patreon.com/griffinnorth"><FaPatreon />{'  '}Join the Patreon</Button>
                            <br /><br />
                        </Col>
                    </Row>
                </Container>
                <h3>Sample Pages</h3>
                <Gallery items={acData} />
                <h3>Design Work</h3>
                <Gallery items={acDesignData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default ACComic