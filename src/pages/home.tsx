import Header from '../components/header';

const Home = () => {
  return (
    <>
        <Header></Header>
        <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center">
        <header className="text-center p-10">
            <h1 className="text-5xl font-bold text-purple-600">Welcome to Interview Helper</h1>
            <p className="text-lg text-gray-700">Your AI-powered interview preparation assistant</p>
        </header>
        <main className="flex flex-col items-center">
            <button className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
            Get Started
            </button>
        </main>
        </div>
    </>
  );
};

export default Home;
