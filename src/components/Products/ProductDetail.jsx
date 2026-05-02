import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={styles.notFound}>
        <h2>Không tìm thấy sản phẩm</h2>
        <button onClick={() => navigate('/products')} style={styles.backBtn}>
          Quay lại cửa hàng
        </button>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>
        ← Quay lại
      </button>
      
      <div style={styles.productDetail}>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        
        <div style={styles.infoSection}>
          <h1 style={styles.name}>{product.name}</h1>
          <p style={styles.material}>Chất liệu: {product.material}</p>
          <p style={styles.category}>Danh mục: {product.category}</p>
          <p style={styles.price}>{formatPrice(product.price)}</p>
          
          <div style={styles.description}>
            <h3>Mô tả sản phẩm:</h3>
            <p>{product.description}</p>
          </div>

          <div style={styles.quantitySection}>
            <label>Số lượng:</label>
            <div style={styles.quantityControls}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.qtyBtn}
              >
                -
              </button>
              <span style={styles.quantity}>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                style={styles.qtyBtn}
              >
                +
              </button>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            disabled={!product.inStock}
            style={{
              ...styles.addBtn,
              ...(!product.inStock && styles.disabledBtn)
            }}
          >
            {product.inStock ? `Thêm vào giỏ (${formatPrice(product.price * quantity)})` : 'Hết hàng'}
          </button>

          <div style={styles.features}>
            <div style={styles.feature}>✨ Chính hãng 100%</div>
            <div style={styles.feature}>🚚 Giao hàng miễn phí</div>
            <div style={styles.feature}>🔧 Bảo hành trọn đời</div>
          </div>
        </div>
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
  backBtn: {
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '2rem'
  },
  productDetail: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem'
  },
  imageSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '2rem'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px'
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  name: {
    fontSize: '2rem',
    color: '#2c1810'
  },
  material: {
    color: '#666',
    fontSize: '1rem'
  },
  category: {
    color: '#666',
    fontSize: '0.9rem'
  },
  price: {
    fontSize: '2rem',
    color: '#d4af37',
    fontWeight: 'bold'
  },
  description: {
    lineHeight: '1.6',
    color: '#555'
  },
  quantitySection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem'
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  qtyBtn: {
    width: '30px',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem'
  },
  quantity: {
    minWidth: '40px',
    textAlign: 'center',
    fontSize: '1.1rem'
  },
  addBtn: {
    padding: '15px',
    backgroundColor: '#2c1810',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem'
  },
  disabledBtn: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed'
  },
  features: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    flexWrap: 'wrap'
  },
  feature: {
    padding: '5px 10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    fontSize: '0.9rem'
  },
  notFound: {
    textAlign: 'center',
    padding: '4rem'
  }
};

export default ProductDetail;