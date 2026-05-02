import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/Products/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div style={styles.container}>
      <div style={styles.filterSection}>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        
        <div style={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...styles.categoryBtn,
                ...(selectedCategory === category && styles.activeCategory)
              }}
            >
              {category === 'all' ? 'Tất cả' : category}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={styles.noProducts}>Không tìm thấy sản phẩm nào</p>
        )}
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
  filterSection: {
    marginBottom: '2rem'
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '1rem'
  },
  categoryFilter: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  categoryBtn: {
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  activeCategory: {
    backgroundColor: '#2c1810',
    color: 'white'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem'
  },
  noProducts: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#999',
    padding: '2rem'
  }
};

export default Products;