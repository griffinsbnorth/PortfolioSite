import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const TSTComic = () => {
    let tstData = require("../../assets/db/tstPages.json");
    let tstDesignData = require("../../assets/db/tstDesign.json");
    let tstSplashData = [
        {
            "id": 0,
            "title":"Tora Steals Things Volume 1 Cover",
            "size": "516-729",
            "src": "TST_Book1Cover.webp",
            "thumb": "TST_icon.webp"
        }
    ];

    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's project page describing their comic, Tora Steals Things, with sample work"
                />
                <title>Griffin North | Tora Steals Things Comic</title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='tst'>
                <h2>Comic: Tora Steals Things (2016-2023)</h2>
                <Container>
                    <Row>
                        <Col>
                        <Gallery items={tstSplashData} />
                        </Col>
                        <Col>
                            <p>
                                In a series of jokes, episodes, and short prose--<b>Tora Steals Things</b> tells the story
                                of the titular thief, Tora Zollun, trying to find a life of happiness after narrowly
                                escaping death from his ugly past. He's joined by a hopeless romantic named Soheon,
                                the cynic Myoisia, the work-aholic Trip the Warrior, and their guild of eccentrics
                                on a myriad of ridiculous escapades.
                            </p>
                            <p>
                                Yet while Tora is off having fun with his new friends, it's only a matter of time
                                before his past catches up to him.
                            </p>
                            <p>
                                -----------
                            </p>
                            <p>
                                <b>Tora Steals Things</b> is a comic (loosely) inspired by the many misadventures
                                I had in the MMORPG game of <b>Guild Wars 2</b> while part of a mainly World vs World Guild.
                                It was started in 2016 as a creative outlet while working on my Computer Science Degree.
                            </p>
                            <p>
                                I wrote the stories by taking my guild's antics as inspiration and writing
                                our game avatars as if they were actual people in the world of
                                the game. The result is a series that is mainly fiction but somewhat
                                semi-autobiographical.
                            </p>
                            <p>
                                The entire series is finished as of December 2023.
                            </p>
                            <Button variant="secondary" href="https://torastealsthings.com/"><CgWebsite />{'  '}Read on Official Site</Button>{` `}
                            <Button variant="secondary" href="https://gumroad.com/griffinnorth"><FaShoppingCart />{'  '}Buy The Ebooks</Button>
                            <br /><br />
                        </Col>
                    </Row>
                </Container>
                <h3>Samples Pages: Amulet Of Bolli pages 1-10</h3>
                <Gallery items={tstData} />
                <h3>Design Work</h3>
                <Gallery items={tstDesignData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default TSTComic