import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';

const Illustration = () => {
    let illustrationsData = require("../../assets/db/illustrations.json");
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's Illustration gallery"
                />
                <title>Griffin North | Illustration Work</title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='illustration'>
                <h2>Illustration</h2>
                <Gallery items={illustrationsData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default Illustration