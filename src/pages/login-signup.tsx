import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import HeaderImmerse from "../components/header-immerse";

const LoginSignup = () => {
  const auth = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isLogin) {
        await auth.login(formData.email, formData.password);
      } else {
        await auth.signup(formData.username, formData.email, formData.password);
      }
    } catch (err) {
      setError('Authentication failed');
    }
  };

  if (auth.user) {
    return (
        <>
            <HeaderImmerse></HeaderImmerse>
            <div className="p-4 max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Welcome, {auth.user.username}!</h2>
                <p className="mb-2">Email: {auth.user.email}</p>
                <button
                onClick={auth.logout}
                className="w-full bg-purple-500 text-white py-2 rounded hover:bg-red-600"
                >
                Logout
                </button>
            </div>
        </>
      
    );
  }

  return (
    <>
        <HeaderImmerse></HeaderImmerse>
        <div className="p-4 max-w-md mx-auto mt-10 bg-purple-100 rounded-lg shadow-md">
        <h2 className="text-3xl text-center font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
            {!isLogin && (
            <div className="mb-4">
                <label className="block mb-2">Username</label>
                <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full p-2 border rounded"
                required
                />
            </div>
            )}
            
            <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border rounded"
                required
            />
            </div>
            
            <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-2 border rounded"
                required
            />
            </div>
            
            <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 mb-4"
            >
            {isLogin ? 'Login' : 'Sign Up'}
            </button>
        </form>
        
        <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-purple-500 hover:underline"
        >
            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
        </button>
        </div>
    </>
  );
};

export default LoginSignup;