import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-10 sm:p-20 bg-primary space-y-3">
        <h1 className="heading promoTest">About Us</h1>
        <p className="txt poppins">
          Founded in 2014 and based in <strong>Huittinen, Finland</strong>,{" "}
          <strong><em>Huhtamon Ajatuspaja Oy</em></strong> is a limited liability company
          specializing in delivering personalized services tailored to meet the
          unique needs of each client. With a strong commitment to customer
          satisfaction, we pride ourselves on providing high-quality, reliable
          service solutions across a wide range of industries and sectors.
        </p>
        <p className="txt poppins">
          One of our standout offerings is <strong><em>Farm Faults</em></strong>, an
          innovative mobile game that seamlessly blends the excitement of
          outdoor exploration with the thrill of gaming. Inspired by the success
          of augmented reality games such as <strong><em>Pokémon Go, 
          Farm Faults</em></strong> encourages players to venture outside,
          immerse themselves in their surroundings, and solve captivating
          challenges in a farming-themed world. The game promotes strategic
          thinking, problem-solving, and adventure, providing hours of
          entertainment while fostering a connection with nature.
        </p>
        <p className="txt poppins">
          At <strong><em>Huhtamon Ajatuspaja Oy</em></strong>, our mission is to create
          enjoyable, memorable experiences that inspire a sense of discovery and
          adventure. We are driven by our passion for innovation and our
          commitment to excellence, continuously striving to design experiences
          that our customers will treasure for years to come.
        </p>
      </div>
      <Footer />
    </>
  );
}
