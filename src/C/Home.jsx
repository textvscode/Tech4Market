import React from "react";
import "./Home.css";
import keyboard from "../img/221009582_logitech-g-pro.webp";
import mouse from "../img/UUHWY3p5G12KKccN.jpg";
import monitor from "../img/6896b3f2-fdea-4b0f-a507-8b5561111a6c.jpg";
import pc from "../img/981b2616-a037-4ea9-a3f8-74d15ea7cfdf.webp";


function Home() {
  return (
  <>
    <section className="home">
      <div className="home-content">
        <h1 className="home-title">TechMarket</h1>

        <p className="home-description">
          TechMarket — современный интернет-магазин игровой техники и аксессуаров.
          У нас вы найдете игровые клавиатуры, мыши, наушники, мониторы и другие
          устройства от популярных брендов по выгодным ценам.
          <br /><br />
          Мы предлагаем широкий ассортимент товаров для геймеров любого уровня —
          от начинающих игроков до профессиональных киберспортсменов.
          <br /><br />
          TechMarket — всё для комфортной и победной игры в одном месте!
        </p>

        <a href="/market" className="home-btn">
          Перейти в магазин
        </a>
      </div>
    </section>
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">Почему выбирают TechMarket?</h2>
        <ul className="about-list">
          <li>Широкий ассортимент игровой техники от ведущих брендов.</li>
          <li>Конкурентные цены и регулярные акции.</li>
          <li>Быстрая доставка по всей стране.</li>
          <li>Профессиональная поддержка клиентов.</li>
        </ul>
      </div>
    </section>
    <section className="gallery">
     <div className="gallery-t">
      <h2 className="gallery-title">Галерея товаров</h2>
      <p>В нашей галерее представлены лучшие товары для геймеров и любителей современных технологий.
       Здесь вы можете ознакомиться с игровыми клавиатурами, мышками, мониторами и мощными компьютерами,
       которые сочетают высокую производительность, стильный дизайн и надежность.
        TechMarket предлагает качественное оборудование для комфортной работы, учебы и захватывающих игровых сессий.</p>
     </div>
        <div className="gallery-i">
          <img src={keyboard} alt="Keyboard" />
          <img src={mouse} alt="Mouse" />
          <img src={monitor} alt="Monitor" />
          <img src={pc} alt="PC" />
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
  );
}

export default Home;