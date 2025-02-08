import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import InterviewPractice from './pages/interview-practice';
import VirtualInterview from './pages/virtual-interview';
import LoginSignup from './pages/login-signup';
import AuthProvider from './context/AuthContext';
import {ProtectedRoute} from './context/ProtectedRoute';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interview-practice" element={<InterviewPractice />} />
        <Route path="/virtual-interview" element={<VirtualInterview />} />
        <Route path="/user" element={<LoginSignup />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/> 
          </ProtectedRoute>
        }/>
        <Route path="/resources" element={<h1>Resources</h1>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App
