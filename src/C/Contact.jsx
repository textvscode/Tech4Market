import React from "react";
import "./Contact.css";

function Contact() {
    return (
      <>
        <section className="home">
      <div className="home-content">
        <h1 className="home-title">Contact Us</h1>
        <div className="form">
          <form>
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Your Email" className="input-field" />
            <textarea placeholder="Your Message" className="input-field textarea"></textarea>
            <button type="submit" className="home-btn">Send Message</button>
          </form>
        </div>
      </div>
      </section>
      <footer className="footer">
    <div className="footer-logo">
      <span className="footer-logo">© TechMarket</span>
      <p className="footer-text">2026 All rights reserved.</p>
    </div>
    <div className="footer-Company">
      <h3 className="footer-title">Company</h3>
      <ul className="footer-list">
        <li><a href="/" className="footer-link">Location</a></li>
        <li><a href="/" className="footer-link">About Us</a></li>
        <li><a href="/" className="footer-link">Careers</a></li>
      </ul>
    </div>
    <div className="footer-support">
      <h3 className="footer-title">Support</h3>
      <ul className="footer-list">
        <li><a href="/" className="footer-link">Help Center</a></li>
        <li><a href="/" className="footer-link">Contact Us</a></li>
        <li><a href="/" className="footer-link">Returns</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <h3 className="footer-title">Follow Us</h3>
      <ul className="footer-list">
        <li><a href="/" className="footer-link">Facebook</a></li>
        <li><a href="/" className="footer-link">Twitter</a></li>
        <li><a href="/" className="footer-link">Instagram</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h3 className="footer-title">Contact Us</h3>
      <p className="footer-text">Email:TechMarket@gmail.com</p>
      <p className="footer-text">Phone: +7 700 777 77 77</p>
    </div>
    </footer>
  </>
    )
}

export default Contact;