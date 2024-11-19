import React, {useEffect} from 'react';
import NavBar from "../../components/DevNavBar";
import HeroBanner from "../../components/DevHero";
import Projects from "../../components/DevProjects";
import Contact from "../../components/Contact";
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

const DevHome = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }, [])

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Griffin North's portfolio for software development"
        />
        <title>Griffin North | Software Developer </title>
      </Helmet>
      <NavBar />
      <HeroBanner />
      <Projects />
      <Contact />
      <Footer type="dev" />
    </div>
  )
}

export default DevHome