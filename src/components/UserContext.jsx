import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setUserRole(localStorage.getItem('userRole'));
    setUserName(localStorage.getItem('userName'));
  }, []);

  const updateUser = (name, role) => {
    localStorage.setItem('userName', name);
    localStorage.setItem('userRole', role);
    setUserName(name);
    setUserRole(role);
  };

  return (
    <UserContext.Provider value={{ userRole, userName, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
