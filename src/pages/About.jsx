import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>Về Chúng Tôi</h1>
        <p>Hành trình tỏa sáng cùng những viên đá quý</p>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h2>Câu chuyện của chúng tôi</h2>
          <p>
            Được thành lập từ năm 2010, Jewelry Store tự hào là thương hiệu trang sức cao cấp 
            hàng đầu Việt Nam. Với sứ mệnh mang đến vẻ đẹp tinh tế và sang trọng cho mọi người, 
            chúng tôi không ngừng sáng tạo và hoàn thiện từng sản phẩm.
          </p>
        </div>

        <div style={styles.section}>
          <h2>Sứ mệnh</h2>
          <p>
            Chúng tôi cam kết cung cấp những sản phẩm trang sức chất lượng cao nhất, 
            được chế tác từ những nguyên liệu quý hiếm nhất, với thiết kế độc đáo và 
            tinh tế nhất, mang lại niềm tự hào và hạnh phúc cho khách hàng.
          </p>
        </div>

        <div style={styles.values}>
          <div style={styles.valueCard}>
            <h3>✨ Chất lượng</h3>
            <p>100% sản phẩm đạt chuẩn quốc tế</p>
          </div>
          <div style={styles.valueCard}>
            <h3>🎨 Sáng tạo</h3>
            <p>Thiết kế độc đáo, không trùng lặp</p>
          </div>
          <div style={styles.valueCard}>
            <h3>💝 Tận tâm</h3>
            <p>Phục vụ khách hàng chuyên nghiệp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  hero: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#2c1810',
    padding: '60px 20px',
    textAlign: 'center',
    background: '#f5f0eb'
  },
  content: {
    padding: '2rem'
  },
  section: {
    marginBottom: '2rem',
    lineHeight: '1.8'
  },
  values: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  },
  valueCard: {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }
};

export default About;