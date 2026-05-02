import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Liên hệ với chúng tôi</h1>
        <p>Chúng tôi luôn sẵn sàng lắng nghe bạn</p>
      </div>

      <div style={styles.content}>
        <div style={styles.info}>
          <div style={styles.infoItem}>
            <h3>📍 Địa chỉ</h3>
            <p>123 Đường Trang Sức, Quận 1, TP.HCM</p>
          </div>
          <div style={styles.infoItem}>
            <h3>📞 Hotline</h3>
            <p>1900 1234</p>
          </div>
          <div style={styles.infoItem}>
            <h3>📧 Email</h3>
            <p>info@jewelrystore.com</p>
          </div>
          <div style={styles.infoItem}>
            <h3>⏰ Giờ làm việc</h3>
            <p>Thứ 2 - Thứ 7: 8:00 - 21:00</p>
            <p>Chủ nhật: 9:00 - 18:00</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Lời nhắn"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Gửi liên hệ
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem'
  },
  info: {
    padding: '2rem',
    backgroundColor: '#f5f0eb',
    borderRadius: '10px'
  },
  infoItem: {
    marginBottom: '1.5rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    resize: 'vertical'
  },
  button: {
    padding: '12px',
    backgroundColor: '#2c1810',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  }
};

export default Contact;