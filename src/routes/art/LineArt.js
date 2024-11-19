import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';

const LineArt = () => {
    let lineArtData = require("../../assets/db/lineArt.json");
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's Line Art gallery"
                />
                <title>Griffin North | Line Art Work</title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='lineart'>
                <h2>Line Art</h2>
                <Gallery items={lineArtData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default LineArt