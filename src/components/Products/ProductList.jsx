import React, { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  let filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sắp xếp sản phẩm
  if (sortBy === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={styles.container}>
      {/* Filters */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="🔍 Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        
        <div style={styles.filterGroup}>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            style={styles.select}
          >
            <option value="default">Sắp xếp: Mặc định</option>
            <option value="price-asc">Giá: Thấp → Cao</option>
            <option value="price-desc">Giá: Cao → Thấp</option>
          </select>

          <div style={styles.categories}>
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
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div style={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={styles.noResults}>
          <p>😞 Không tìm thấy sản phẩm nào</p>
          <button onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
          }} style={styles.resetBtn}>
            Xóa bộ lọc
          </button>
        </div>
      )}

      {/* Result count */}
      <div style={styles.resultCount}>
        Hiển thị {filteredProducts.length} / {products.length} sản phẩm
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
  filters: {
    marginBottom: '2rem'
  },
  searchInput: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '10px',
    marginBottom: '1rem',
    outline: 'none'
  },
  filterGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  select: {
    padding: '8px 15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  categories: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  categoryBtn: {
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '20px',
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
  noResults: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px'
  },
  resetBtn: {
    marginTop: '1rem',
    padding: '8px 20px',
    backgroundColor: '#2c1810',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  resultCount: {
    marginTop: '2rem',
    textAlign: 'center',
    color: '#666',
    fontSize: '0.9rem'
  }
};

export default ProductList;