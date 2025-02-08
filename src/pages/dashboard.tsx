import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext for managing user state
import Header from '../components/header';

const Dashboard = () => {
  const { user } = useAuth();  // Get the current logged-in user from context
  const [userStats, setUserStats] = useState<any>(null);  // State to hold user stats

  useEffect(() => {
    let email = "";
    if (user) {
    const userString = localStorage.getItem("user");
    if (userString) {
        const user = JSON.parse(userString);
        email = user.email; 
      }
      fetch('http://localhost:8000/api/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Email': email,
        },    
      })
        .then((response) => response.json())
        .then((data) => {
          setUserStats(data);  // Store the stats in state
        })
        .catch((error) => console.error('Error fetching user stats:', error));
    }
  }, [user]);

  return (
    <>
        <Header />
        <div className="bg-purple-50 min-h-screen flex flex-col items-center justify-center py-12 px-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-purple-600 mb-2">Dashboard</h1>
                <p className="text-lg text-gray-700">Overview of your interview preparation progress</p>
            </header>
            <main className="space-y-6">
                <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-purple-600">Your Stats</h2>
                <ul className="mt-4 text-gray-700 space-y-2">
                    <li className="flex justify-between">
                    <span className="font-medium">Practice Attempts:</span>
                    <span>{userStats?.prac_attempts}</span>
                    </li>
                    <li className="flex justify-between">
                    <span className="font-medium">Practice Rating:</span>
                    <span>{userStats?.prac_rating}</span>
                    </li>
                    <li className="flex justify-between">
                    <span className="font-medium">Mock Attempts:</span>
                    <span>{userStats?.mock_attempts}</span>
                    </li>
                    <li className="flex justify-between">
                    <span className="font-medium">Mock Rating:</span>
                    <span>{userStats?.mock_rating}</span>
                    </li>
                </ul>
                </div>
                <div className="text-center">
                <button className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
                    View More Insights
                </button>
                </div>
            </main>
            </div>
        </div>
    </>

  );
};

export default Dashboard;
