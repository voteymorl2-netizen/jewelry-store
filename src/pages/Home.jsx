import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/Products/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section Premium */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>✦ Bộ sưu tập mới 2024 ✦</div>
          <h1 style={styles.heroTitle}>
            Tỏa Sáng Cùng <span style={styles.heroHighlight}>Trang Sức</span> Cao Cấp
          </h1>
          <p style={styles.heroSubtitle}>
            Khám phá bộ sưu tập trang sức tinh tế, sang trọng dành riêng cho bạn
          </p>
          <div style={styles.heroButtons}>
            <Link to="/products" style={styles.heroButtonPrimary}>
              Mua ngay ✨
            </Link>
            <Link to="/about" style={styles.heroButtonSecondary}>
              Tìm hiểu thêm →
            </Link>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>10+</span>
              <span style={styles.statLabel}>Năm kinh nghiệm</span>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>5000+</span>
              <span style={styles.statLabel}>Khách hàng hài lòng</span>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>100%</span>
              <span style={styles.statLabel}>Sản phẩm chính hãng</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Premium */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionBadge}>SẢN PHẨM NỔI BẬT</span>
          <h2 style={styles.sectionTitle}>Tinh hoa trang sức Việt</h2>
          <p style={styles.sectionSubtitle}>
            Những thiết kế độc đáo, kết tinh từ đôi bàn tay khéo léo của nghệ nhân
          </p>
        </div>
        <div style={styles.productGrid}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={styles.viewAll}>
          <Link to="/products" style={styles.viewAllButton}>
            Xem tất cả sản phẩm →
          </Link>
        </div>
      </section>

      {/* Features Premium */}
      <section style={styles.features}>
        <div style={styles.featuresContainer}>
          <div style={styles.featuresHeader}>
            <span style={styles.featuresBadge}>CAM KẾT CỦA CHÚNG TÔI</span>
            <h2 style={styles.featuresTitle}>Trải nghiệm đẳng cấp</h2>
          </div>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIconWrapper}>
                <div style={styles.featureIconBg}>
                  <span style={styles.featureIcon}>💎</span>
                </div>
              </div>
              <h3 style={styles.featureTitle}>Sản phẩm chính hãng</h3>
              <p style={styles.featureDesc}>100% sản phẩm đạt chuẩn quốc tế, có chứng nhận đá quý</p>
              <div style={styles.featureCheck}>✓ Cam kết chính hãng</div>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIconWrapper}>
                <div style={styles.featureIconBg}>
                  <span style={styles.featureIcon}>🚀</span>
                </div>
              </div>
              <h3 style={styles.featureTitle}>Giao hàng miễn phí</h3>
              <p style={styles.featureDesc}>Miễn phí vận chuyển cho đơn hàng từ 5 triệu</p>
              <div style={styles.featureCheck}>✓ Giao hàng nhanh 2h</div>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIconWrapper}>
                <div style={styles.featureIconBg}>
                  <span style={styles.featureIcon}>🔧</span>
                </div>
              </div>
              <h3 style={styles.featureTitle}>Bảo hành trọn đời</h3>
              <p style={styles.featureDesc}>Vệ sinh, bảo dưỡng và sửa chữa miễn phí</p>
              <div style={styles.featureCheck}>✓ Bảo hành toàn diện</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Call to Action */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Bạn đã sẵn sàng tỏa sáng?</h2>
          <p style={styles.ctaDesc}>
            Hãy để chúng tôi đồng hành cùng bạn trong những khoảnh khắc đặc biệt nhất
          </p>
          <Link to="/products" style={styles.ctaButton}>
            Khám phá ngay
          </Link>
        </div>
      </section>
    </div>
  );
};

const styles = {
  // Hero Section
  hero: {
    position: 'relative',
    backgroundImage: 'url("https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)'
  },
  heroPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
    pointerEvents: 'none'
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
    animation: 'fadeInUp 0.8s ease'
  },
  heroBadge: {
    display: 'inline-block',
    padding: '8px 20px',
    backgroundColor: 'rgba(255,215,0,0.2)',
    border: '1px solid #ffd700',
    borderRadius: '50px',
    fontSize: '0.85rem',
    fontWeight: '500',
    letterSpacing: '1px',
    marginBottom: '1.5rem',
    color: '#ffd700'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    color: 'white'
  },
  heroHighlight: {
    color: '#ffd700',
    position: 'relative',
    display: 'inline-block'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.95,
    lineHeight: '1.6',
    color: 'rgba(255,255,255,0.9)'
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  },
  heroButtonPrimary: {
    display: 'inline-block',
    padding: '14px 35px',
    backgroundColor: '#ffd700',
    color: '#1a1a2e',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    fontSize: '1rem'
  },
  heroButtonSecondary: {
    display: 'inline-block',
    padding: '14px 35px',
    backgroundColor: 'transparent',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    border: '2px solid white',
    transition: 'all 0.3s',
    fontSize: '1rem'
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    flexWrap: 'wrap'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statNumber: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ffd700'
  },
  statLabel: {
    fontSize: '0.85rem',
    opacity: 0.8,
    marginTop: '0.5rem'
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },

  // Section Products
  section: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  sectionBadge: {
    display: 'inline-block',
    padding: '5px 15px',
    backgroundColor: 'rgba(44,24,16,0.1)',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: '600',
    letterSpacing: '1px',
    marginBottom: '1rem',
    color: '#2c1810'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#2c1810',
    marginBottom: '1rem'
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  viewAll: {
    textAlign: 'center'
  },
  viewAllButton: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: '#2c1810',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    border: '2px solid #2c1810',
    transition: 'all 0.3s'
  },

  // Features Section
  features: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  featuresContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  featuresHeader: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  featuresBadge: {
    display: 'inline-block',
    padding: '5px 15px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: '600',
    letterSpacing: '1px',
    marginBottom: '1rem',
    color: '#ffd700'
  },
  featuresTitle: {
    fontSize: '2.5rem',
    color: 'white',
    marginBottom: '0'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem'
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2.5rem',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  featureIconWrapper: {
    marginBottom: '1.5rem'
  },
  featureIconBg: {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(44,24,16,0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    transition: 'all 0.3s'
  },
  featureIcon: {
    fontSize: '2.5rem'
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2c1810',
    marginBottom: '1rem'
  },
  featureDesc: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  featureCheck: {
    display: 'inline-block',
    padding: '5px 12px',
    backgroundColor: '#ffd700',
    color: '#2c1810',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  },

  // CTA Section
  cta: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    padding: '100px 20px',
    textAlign: 'center'
  },
  ctaContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: '2.5rem',
    color: 'white',
    marginBottom: '1rem'
  },
  ctaDesc: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '2rem'
  },
  ctaButton: {
    display: 'inline-block',
    padding: '14px 40px',
    backgroundColor: '#ffd700',
    color: '#1a1a2e',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'all 0.3s'
  }
};

// Thêm animation vào CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .hero-content {
    animation: fadeInUp 0.8s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
  
  .feature-card:hover .feature-icon-bg {
    transform: scale(1.1);
    background-color: rgba(44,24,16,0.2);
  }
  
  .view-all-button:hover,
  .hero-button-primary:hover,
  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  }
  
  .hero-button-secondary:hover {
    background-color: white;
    color: #2c1810;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
`;
document.head.appendChild(styleSheet);

export default Home;