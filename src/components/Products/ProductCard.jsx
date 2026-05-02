import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [showTooltip, setShowTooltip] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!user) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
    addToCart(product);
  };

  return (
    <div style={styles.card}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={styles.image}
      />
      <div style={styles.content}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.material}>{product.material}</p>
        <p style={styles.price}>{formatPrice(product.price)}</p>
        
        <div style={styles.buttonContainer}>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            style={{
              ...styles.button,
              ...(!product.inStock && styles.buttonDisabled)
            }}
          >
            {product.inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
          </button>
          {showTooltip && !user && (
            <div style={styles.tooltip}>
              ⚠️ Vui lòng đăng nhập để mua hàng!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  },
  content: {
    padding: '1rem'
  },
  name: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: '#333'
  },
  material: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '0.5rem'
  },
  price: {
    color: '#d4af37',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  buttonContainer: {
    position: 'relative'
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#2c1810',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s'
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed'
  },
  tooltip: {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '10px',
    padding: '8px 12px',
    backgroundColor: '#ff4444',
    color: 'white',
    borderRadius: '5px',
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    zIndex: 10,
    animation: 'fadeIn 0.3s ease'
  }
};

export default ProductCard;