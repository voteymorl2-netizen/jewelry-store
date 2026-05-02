import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const LoginModal = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (!success) {
        setError('Email hoặc mật khẩu không đúng!\nDemo: user@example.com / 123456');
      }
    } else {
      if (formData.name && formData.email && formData.password) {
        register(formData.name, formData.email, formData.password);
      } else {
        setError('Vui lòng điền đầy đủ thông tin!');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={styles.overlay} onClick={() => setIsLoginModalOpen(false)}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={() => setIsLoginModalOpen(false)}>✕</button>
        
        <div style={styles.header}>
          <div style={styles.icon}>💎</div>
          <h2 style={styles.title}>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h2>
          <p style={styles.subtitle}>
            {isLogin ? 'Đăng nhập để mua hàng' : 'Tạo tài khoản mới'}
          </p>
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          )}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>

        <div style={styles.footer}>
          <p>
            {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({ name: '', email: '', password: '' });
              }}
              style={styles.switchBtn}
            >
              {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
            </button>
          </p>
          {isLogin && (
            <div style={styles.demo}>
              <p>📝 Tài khoản demo:</p>
              <code>Email: user@example.com</code>
              <code>Mật khẩu: 123456</code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '20px',
    width: '90%',
    maxWidth: '450px',
    padding: '2rem',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#999',
    transition: 'color 0.3s'
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '0.5rem'
  },
  title: {
    fontSize: '1.8rem',
    color: '#2c1810',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#666',
    fontSize: '0.9rem'
  },
  error: {
    backgroundColor: '#fee',
    color: '#c33',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    marginBottom: '1rem',
    textAlign: 'center',
    whiteSpace: 'pre-line'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
    outline: 'none'
  },
  button: {
    padding: '12px',
    backgroundColor: '#2c1810',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  footer: {
    marginTop: '1.5rem',
    textAlign: 'center',
    borderTop: '1px solid #eee',
    paddingTop: '1rem'
  },
  switchBtn: {
    background: 'none',
    border: 'none',
    color: '#d4af37',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginLeft: '0.5rem'
  },
  demo: {
    marginTop: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    fontSize: '0.8rem'
  }
};

export default LoginModal;