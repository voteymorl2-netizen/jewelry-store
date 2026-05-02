import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <h2>Giỏ hàng trống</h2>
        <p>Hãy thêm sản phẩm vào giỏ hàng nhé!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Giỏ hàng của bạn</h2>
      
      {cartItems.map(item => (
        <div key={item.id} style={styles.cartItem}>
          <img src={item.image} alt={item.name} style={styles.itemImage} />
          
          <div style={styles.itemDetails}>
            <h3>{item.name}</h3>
            <p>{item.material}</p>
            <p style={styles.price}>{formatPrice(item.price)}</p>
          </div>

          <div style={styles.quantityControls}>
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              style={styles.quantityBtn}
            >
              -
            </button>
            <span style={styles.quantity}>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              style={styles.quantityBtn}
            >
              +
            </button>
          </div>

          <div style={styles.itemTotal}>
            {formatPrice(item.price * item.quantity)}
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={styles.removeBtn}
          >
            🗑️
          </button>
        </div>
      ))}

      <div style={styles.summary}>
        <div style={styles.total}>
          <span>Tổng cộng:</span>
          <span style={styles.totalPrice}>{formatPrice(getTotalPrice())}</span>
        </div>
        <button style={styles.checkoutBtn}>
          Tiến hành thanh toán
        </button>
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
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2c1810'
  },
  cartItem: {
    display: 'grid',
    gridTemplateColumns: '100px 2fr 1fr 1fr auto',
    gap: '1rem',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #eee'
  },
  itemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  itemDetails: {
    padding: '0 1rem'
  },
  price: {
    color: '#d4af37',
    fontWeight: 'bold'
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  quantityBtn: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem'
  },
  quantity: {
    minWidth: '30px',
    textAlign: 'center'
  },
  itemTotal: {
    fontWeight: 'bold',
    color: '#d4af37'
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0.5rem'
  },
  summary: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    textAlign: 'right'
  },
  total: {
    fontSize: '1.2rem',
    marginBottom: '1rem'
  },
  totalPrice: {
    fontSize: '1.5rem',
    color: '#d4af37',
    fontWeight: 'bold',
    marginLeft: '1rem'
  },
  checkoutBtn: {
    padding: '12px 30px',
    backgroundColor: '#2c1810',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  emptyCart: {
    textAlign: 'center',
    padding: '4rem',
    color: '#666'
  }
};

export default Cart;