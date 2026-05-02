import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  main: {
    minHeight: 'calc(100vh - 200px)',
    backgroundColor: '#fafafa'
  }
};

export default Layout;