import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import Cards from "../components/cards";
import Contact from "../components/HomeFooter";
import Footer from "../components/Footer";



const Home = () =>{

    return(
        <>
            <Hero />
            <Aboutme />
            <Cards />
            <Contact />
            <Footer />
        </>
    )

}

export default Home