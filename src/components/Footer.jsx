import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Footer />
    </div>
  );
}

export function AboutUs() {
  return (
    <div>
      <h2>AboutUs</h2>
      <Footer />
    </div>
  );
}

export function Branches() {
  return (
    <div>
      <h2>Branches</h2>
      <Footer />
    </div>
  );
}