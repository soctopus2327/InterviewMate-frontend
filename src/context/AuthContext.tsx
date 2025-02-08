// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface User {
//   username: string;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (username: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// };

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProvider = ({ children }: AuthProviderProps) => {
    
//     const [user, setUser] = useState<User | null>(() => {
//         const saved = localStorage.getItem('user');
//         return saved ? JSON.parse(saved) : null;
//       });

//   const login = async (email: string, password: string) => {
//     try {
//       const response = await fetch('http://localhost:8000/api/users/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });
      
//       if (!response.ok) throw new Error('Login failed');
      
//       const data = await response.json();
//       localStorage.setItem('user', JSON.stringify(data.data));
//       setUser(data.user);
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   };

//   const signup = async (username: string, email: string, password: string) => {
//     try {
//       const response = await fetch('http://localhost:8000/api/users', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, email, password })
//       });
      
//       if (!response.ok) throw new Error('Signup failed');
      
//       const data = await response.json();
//       localStorage.setItem('user', JSON.stringify(data.user));
//       setUser(data.data);
//     } catch (error) {
//       console.error('Signup error:', error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//   };

//   return (
//     <>
//         <AuthContext.Provider value={{ user, login, signup, logout }}>
//             {children}
//         </AuthContext.Provider>
//     </>
    
//   );
// };

// export default AuthProvider;


import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState<User | null>(null);

  // Load user data from localStorage on component mount (page reload)
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser); // Set user from localStorage if available
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []); // Empty dependency array means this runs only once, on mount

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) throw new Error('Login failed');
      
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user)); // Store user data in localStorage
      setUser(data.user); // Set user state after login
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      
      if (!response.ok) throw new Error('Signup failed');
      
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user)); // Store user data in localStorage
      setUser(data.user); // Set user state after signup
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
    setUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
