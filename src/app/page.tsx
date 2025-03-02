import AccessForm from "@/components/AccessForm";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import Interface from "@/components/Interface";
import Testimonies from "@/components/Testimonies";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Testimonies />
      <Features />
      <Interface />
      <Faq />
      <AccessForm />
      <Footer />
    </>
  );
};

export default Home;
