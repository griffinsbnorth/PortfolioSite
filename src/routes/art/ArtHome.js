import React from 'react';
import NavBar from "../../components/ArtNavBar";
import HeroBanner from "../../components/ArtHero";
import Contact from "../../components/Contact";
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

const ArtHome = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Griffin North's portfolio for illustrative work"
        />
        <title>Griffin North | Illustrator </title>
      </Helmet>
      <NavBar />
      <HeroBanner />
      <Contact />
      <Footer type="art" />
    </div>
  )
}

export default ArtHome