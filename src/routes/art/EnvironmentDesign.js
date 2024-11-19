import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';

const EnvironmentDesign = () => {
    let environmentDesignsData = require("../../assets/db/environmentDesigns.json");
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's Environment Design gallery"
                />
                <title>Griffin North | Environment Design Work</title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='environmentdesign'>
                <h2>Environment Design</h2>
                <Gallery items={environmentDesignsData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default EnvironmentDesign