import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css';
import Navbar1 from './Navbar';
import { FaMoneyCheckAlt, FaArrowDown, FaArrowUp, FaCreditCard, FaWallet, FaGift, FaFileInvoice } from 'react-icons/fa';
import Footer from './Footer';
const carouselData = [
  {
    image: 'https://media.istockphoto.com/id/613241502/photo/young-woman-shopping-on-line.jpg?s=612x612&w=0&k=20&c=qy-3emzsEiQkDd-L8aHz9KTdm0aYFnUkeTfpLHIESvs=',
    title: 'Seamless Payments',
    description: 'Experience the ease of online transactions with top-notch security.'
  },
  {
    image: 'https://img.freepik.com/free-photo/expressive-pretty-woman-posing_344912-1366.jpg?ga=GA1.1.957131146.1729400595&semt=ais_hybrid&w=740',
    title: 'Pay Bills Anytime',
    description: 'Your bills, your time. Pay 24/7 with complete control.'
  },
  {
    image: 'https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg?ga=GA1.1.957131146.1729400595&semt=ais_hybrid&w=740',
    title: 'Smart & Secure',
    description: 'Enjoy intelligent payment tracking and bank-grade encryption.'
  }
];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar1 />

      <div className="carousel">
        {carouselData.map((slide, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="carousel-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        <button className="carousel-arrow left" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-arrow right" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="main-section">

  <div className="profile-container">
  <div className="profile-section">
    <div className="profile-image-container">
      <img 
        src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png" 
        alt="User Profile" 
        className="profile-image"
      />
    </div>
    
    <div className="profile-content">
      <div className="profile-header">
        <h2>Profile</h2>
        <div className="header-actions">
          <div className="payment-options">
            <label className="payment-toggle">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
              <span className="toggle-label">PayIn</span>
            </label>
            <label className="payment-toggle">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
              <span className="toggle-label">PayOut</span>
            </label>
            <label className="payment-toggle">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
              <span className="toggle-label">CCBill</span>
            </label>
          </div>
          <button className="update-icon" title="Update Profile">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4a90e2" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="profile-details">
        <div className="detail-row">
          <span className="detail-label">Name:</span>
          <span className="detail-value">Aju</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Phone:</span>
          <span className="detail-value">9652724937</span>
        </div>
      </div>
      
      <div className="balance-cards">
        <div className="balance-card">
          <div className="balance-icon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4a90e2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          <div className="balance-info">
            <span className="balance-label">Available Balance</span>
            <span className="balance-amount">₹895.28</span>
          </div>
        </div>
        
        <div className="balance-card">
          <div className="balance-icon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4a90e2" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
          <div className="balance-info">
            <span className="balance-label">PayOut Balance</span>
            <span className="balance-amount">₹141,335</span>
          </div>
        </div>
        
        <div className="balance-card highlight">
         
          <div className="balance-info">
            <span className="balance-label">InstantPay Balance</span>
            <span className="balance-amount">₹1,450,914.97</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="services-modern">
  <h2 className="section-header">Our Services</h2>
  <p className="section-subtext">
    At PayMan, we deliver legendary satisfaction to our customers through seamless service.
  </p>
  <div className="service-grid-modern">
    <div className="service-card-modern">
      <FaMoneyCheckAlt className="service-icon" />
      <h4>Balance TopUp</h4>
      <p>Instantly recharge your balance and stay ready for all payments.</p>
    </div>
    <div className="service-card-modern">
      <FaArrowDown className="service-icon" />
      <h4>My PayIns</h4>
      <p>View and manage all your incoming transactions in one place.</p>
    </div>
    <div className="service-card-modern">
      <FaArrowUp className="service-icon" />
      <h4>My Payouts</h4>
      <p>Track all your outgoing payments efficiently and securely.</p>
    </div>
    <div className="service-card-modern">
      <FaCreditCard className="service-icon" />
      <h4>Credit Card Bill Pay</h4>
      <p>Pay your credit card bills with ease and timely reminders.</p>
    </div>
    <div className="service-card-modern">
      <FaWallet className="service-icon" />
      <h4>Expense Cards</h4>
      <p>Manage your team’s spending with smart and secure cards.</p>
    </div>
    <div className="service-card-modern">
      <FaGift className="service-icon" />
      <h4>Gift Cards</h4>
      <p>Send digital gift cards to friends, family or employees in seconds.</p>
    </div>
    <div className="service-card-modern">
      <FaFileInvoice className="service-icon" />
      <h4>Bill Payments</h4>
      <p>Electricity, gas, water—pay all your bills anytime, anywhere.</p>
    </div>
    
  </div>
</div>

<div className="bottom-banner">
  <img
    src="https://paymanfintech.in/images/2decfe19-3f9f-4473-80d7-32b8c76ea11a0000.jpeg"
    alt="Promotional Banner"
    className="bottom-banner-image"
  />
</div>



      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
