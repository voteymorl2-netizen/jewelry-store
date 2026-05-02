import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Cột 1: Logo và mô tả */}
        <div style={styles.column}>
          <h3 style={styles.logo}>💎 JEWELRY STORE</h3>
          <p style={styles.description}>
            Trang sức cao cấp cho mọi người, mang đến vẻ đẹp sang trọng và đẳng cấp.
          </p>
          <div style={styles.social}>
            <a href="#" style={styles.socialIcon}>📘</a>
            <a href="#" style={styles.socialIcon}>📷</a>
            <a href="#" style={styles.socialIcon}>🎵</a>
            <a href="#" style={styles.socialIcon}>▶️</a>
          </div>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div style={styles.column}>
          <h4 style={styles.title}>Liên kết nhanh</h4>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Trang chủ</Link></li>
            <li><Link to="/products" style={styles.link}>Sản phẩm</Link></li>
            <li><Link to="/about" style={styles.link}>Giới thiệu</Link></li>
            <li><Link to="/contact" style={styles.link}>Liên hệ</Link></li>
          </ul>
        </div>

        {/* Cột 3: Thông tin liên hệ */}
        <div style={styles.column}>
          <h4 style={styles.title}>Liên hệ</h4>
          <ul style={styles.list}>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <span>123 Đường Trang Sức, Quận 1, TP.HCM</span>
            </li>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <span>Hotline: 1900 1234</span>
            </li>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <span>info@jewelrystore.com</span>
            </li>
            <li style={styles.contactItem}>
              <span style={styles.contactIcon}>🕐</span>
              <span>8:00 - 21:00 (Thứ 2 - CN)</span>
            </li>
          </ul>
        </div>

        {/* Cột 4: Đăng ký nhận tin */}
        <div style={styles.column}>
          <h4 style={styles.title}>Đăng ký nhận tin</h4>
          <p style={styles.newsletterText}>
            Nhận ưu đãi đặc biệt và sản phẩm mới nhất
          </p>
          <div style={styles.newsletter}>
            <input 
              type="email" 
              placeholder="Email của bạn" 
              style={styles.newsletterInput}
            />
            <button style={styles.newsletterButton}>
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>© 2024 Jewelry Store. All rights reserved. | Thiết kế bởi Jewelry Team</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a2e',
    color: '#eee',
    marginTop: '3rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  column: {
    lineHeight: '1.6'
  },
  logo: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#ffd700'
  },
  description: {
    fontSize: '0.9rem',
    color: '#ccc',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  social: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  socialIcon: {
    display: 'inline-block',
    width: '35px',
    height: '35px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '35px',
    color: '#ffd700',
    textDecoration: 'none',
    transition: 'all 0.3s',
    fontSize: '1.2rem'
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#ffd700',
    position: 'relative',
    paddingBottom: '0.5rem'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '0.5rem',
    transition: 'color 0.3s'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.8rem',
    fontSize: '0.9rem',
    color: '#ccc'
  },
  contactIcon: {
    fontSize: '1.1rem',
    minWidth: '25px'
  },
  newsletterText: {
    fontSize: '0.9rem',
    color: '#ccc',
    marginBottom: '1rem'
  },
  newsletter: {
    display: 'flex',
    gap: '0.5rem'
  },
  newsletterInput: {
    flex: 1,
    padding: '10px',
    border: '1px solid #333',
    borderRadius: '5px',
    backgroundColor: '#2a2a3e',
    color: 'white',
    outline: 'none'
  },
  newsletterButton: {
    padding: '10px 15px',
    backgroundColor: '#ffd700',
    color: '#1a1a2e',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  },
  copyright: {
    textAlign: 'center',
    padding: '1.5rem',
    borderTop: '1px solid #2a2a3e',
    fontSize: '0.85rem',
    color: '#888'
  }
};

// Thêm hiệu ứng hover (có thể thêm vào CSS hoặc style)
const addHoverEffects = () => {
  const style = document.createElement('style');
  style.textContent = `
    .social-icon:hover {
      background-color: #ffd700;
      color: #1a1a2e;
      transform: translateY(-3px);
    }
    .footer-link:hover {
      color: #ffd700;
      transform: translateX(5px);
    }
    .newsletter-button:hover {
      background-color: #e6c200;
    }
  `;
  document.head.appendChild(style);
};

addHoverEffects();

export default Footer;