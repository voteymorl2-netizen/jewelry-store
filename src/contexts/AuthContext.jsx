import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  // Kiểm tra đăng nhập từ localStorage khi load trang
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Đăng nhập
  const login = (email, password) => {
    // Demo: Tài khoản mặc định
    if (email === 'user@example.com' && password === '123456') {
      const userData = { email, name: 'Nguyễn Văn A', id: 1 };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Thực hiện action sau khi đăng nhập
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  // Đăng ký
  const register = (name, email, password) => {
    const userData = { email, name, id: Date.now() };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
    setIsLoginModalOpen(false);
    return true;
  };

  // Đăng xuất
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setPendingAction(null);
  };

  // Kiểm tra đăng nhập trước khi thực hiện action
  const requireAuth = (action) => {
    if (user) {
      action();
    } else {
      setPendingAction(() => action);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      requireAuth,
      isLoginModalOpen,
      setIsLoginModalOpen,
      pendingAction
    }}>
      {children}
    </AuthContext.Provider>
  );
};