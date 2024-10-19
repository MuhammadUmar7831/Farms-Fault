import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";

export default function TermsOfServices() {
  return (
    <>
      <Navbar />
      <div className="p-10 sm:p-20 bg-primary">
        <h1 className="heading promoTest">Terms of Service (TOS)</h1>
        <div className="txt poppins space-y-2">
          {data.map((_data) => (
            <div>
              <h1 className="txt-lg font-semibold poppins">
                {_data.heading}
              </h1>
              <p>{_data.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

const data = [
  {
    heading: "Introduction",
    text: `These Terms of Service ("Terms") govern your access to and use of services provided by Huhtamon Ajatuspaja Oy ("Company," "we," "us," or "our"). By accessing our website or using our services, you agree to comply with these Terms.`,
  },
  {
    heading: "Services Provided",
    text: `We offer a range of personal services, including access to our mobile game Farm Faults. Your use of the game and any other services is subject to these Terms.`,
  },
  {
    heading: "User Conduct",
    text: "Users must use our services responsibly. Any misuse of our services, including unauthorized access, is prohibited.",
  },
  {
    heading: "Intellectual Property",
    text: "All content on our website and within our game is the intellectual property of Huhtamon Ajatuspaja Oy. Unauthorized use of our intellectual property is prohibited.",
  },
  {
    heading: "Disclaimer of Warranties",
    text: `Our services are provided "as-is." We do not guarantee uninterrupted access to our services and are not liable for any disruptions.`,
  },
  {
    heading: "Limitation of Liability",
    text: `We are not liable for any indirect or consequential damages arising from your use of our services.`,
  },
  {
    heading: "Changes to Terms",
    text: `We reserve the right to update these Terms at any time. We encourage users to review this page periodically.`,
  },
];
