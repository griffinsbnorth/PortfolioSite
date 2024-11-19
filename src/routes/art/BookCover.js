import React from 'react';
import NavBar from "../../components/ArtNavBar";
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Helmet } from 'react-helmet';

const BookCover = () => {
    let bookCoversData = require("../../assets/db/bookCovers.json");
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Griffin North's Book Cover gallery"
                />
                <title>Griffin North | Book Cover Work</title>
            </Helmet>
            <NavBar />
            <section className='artpage' id='bookCover'>
                <h2>Book Cover</h2>
                <Gallery items={bookCoversData} />
            </section>
            <Footer type="art" />
        </div>
    )
}

export default BookCover