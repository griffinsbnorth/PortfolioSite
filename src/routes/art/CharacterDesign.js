import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';

const CharacterDesign = () => {
    let characterDesignsData = require("../../assets/db/characterDesigns.json");
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's Character Design gallery"
                />
                <title>Griffin North | Character Design Work</title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='characterdesign'>
                <h2>Character Design</h2>
                <Gallery items={characterDesignsData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default CharacterDesign