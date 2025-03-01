import AccessForm from "@/components/AccessForm";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Interface from "@/components/Interface";
import Testimonies from "@/components/Testimonies";
import React from "react";

const Home = () => {
  return (
    <main>
      <Banner />
      <Header />
      <Hero />
      <Testimonies />
      <Features />
      <Interface />
      <Faq />
      <AccessForm />
      <Footer />
    </main>
  );
};

export default Home;
