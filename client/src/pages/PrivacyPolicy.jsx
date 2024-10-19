import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="p-10 sm:p-20 bg-primary">
        <h1 className="heading promoTest">Privacy Policy</h1>
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
    text: `Huhtamon Ajatuspaja Oy is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.`,
  },
  {
    heading: "Information We Collect",
    text: `We may collect personal information such as your name, email address, and phone number when you contact us or use our services. For Farm Faults, we may also collect gameplay data.`,
  },
  {
    heading: "How We Use Your Information",
    text: "The information we collect is used to provide and improve our services. We do not share your personal data with third parties without your consent.",
  },
  {
    heading: "Data Security",
    text: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure.",
  },
  {
    heading: "Your Rights",
    text: `You have the right to access, modify, or request the deletion of your personal information. Please contact us at juho.riuttamaki@gmail.com for any inquiries regarding your data.`,
  },
  {
    heading: "Changes to This Privacy Policy",
    text: `We may update this Privacy Policy periodically. We encourage users to review this page for any changes.`,
  },
];
