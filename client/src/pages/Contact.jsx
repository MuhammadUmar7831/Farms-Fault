import React from "react";

export default function Contact() {
  return (
    <div className="bg-primary p-10 sm:p-20">
      <h1 className="heading promoTest">Contact Us</h1>
      <div className="txt poppins">
        <p>Huhtamon Ajatuspaja Oy Isonkiventie 183, 32770 Huhtamo</p>
        <p>
          <strong>Finland Phone:</strong> +358 44 3090787
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:juho.riuttamaki@gmail.com">
            juho.riuttamaki@gmail.com
          </a>
        </p>
        <p>
          Whether you have questions about our services, need assistance, or
          want to learn more about our mobile game Farm Faults, we’re here to
          help. Get in touch with us by phone or email, and our founder, Juho
          Riuttamäki, will be happy to assist you.
        </p>
      </div>
    </div>
  );
}
