import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <h1>💎 JEWELRY STORE</h1>
        </Link>
        
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Trang chủ</Link>
          <Link to="/products" style={styles.navLink}>Sản phẩm</Link>
          <Link to="/about" style={styles.navLink}>Giới thiệu</Link>
          <Link to="/contact" style={styles.navLink}>Liên hệ</Link>
        </nav>

        <div style={styles.rightSection}>
          {/* Hiển thị thông tin user */}
          {user ? (
            <div style={styles.userMenu}>
              <span style={styles.userName}>👋 {user.name}</span>
              <button onClick={logout} style={styles.logoutBtn}>
                Đăng xuất
              </button>
            </div>
          ) : (
            <div style={styles.userMenu}>
              <span style={styles.guestText}>👤 Khách</span>
            </div>
          )}
          
          <Link to="/cart" style={styles.cart}>
            🛒 Giỏ hàng
            {getTotalItems() > 0 && (
              <span style={styles.cartBadge}>{getTotalItems()}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2c1810',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  logo: {
    color: '#ffd700',
    textDecoration: 'none',
    fontSize: '1.2rem'
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  userName: {
    color: '#ffd700',
    fontSize: '0.9rem'
  },
  guestText: {
    color: '#ccc',
    fontSize: '0.9rem'
  },
  logoutBtn: {
    background: 'none',
    border: '1px solid #ffd700',
    color: '#ffd700',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    transition: 'all 0.3s'
  },
  cart: {
    color: 'white',
    textDecoration: 'none',
    position: 'relative',
    fontSize: '1.1rem'
  },
  cartBadge: {
    position: 'absolute',
    top: '-10px',
    right: '-15px',
    backgroundColor: '#ff4444',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px'
  }
};

export default Header;