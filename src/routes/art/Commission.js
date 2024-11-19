import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';

const Commission = () => {
    let commissionsData = require("../../assets/db/commissions.json");
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's Commission samples gallery"
                />
                <title>Griffin North | Commissions </title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='commissions'>
                <h2>Commission Samples</h2>
                <Gallery items={commissionsData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default Commission