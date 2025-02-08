import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';

function UserIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'purple', size: '25px' }}
      >
        <div>
          <FaUserCircle />
        </div>
      </IconContext.Provider>
    );
}

const Header = () => {
  return (
    <nav className="bg-purple-50 p-4 place-content-center">
        <ul className="flex space-x-7 mt-2 place-content-center">
            <h2 className="text-purple-500 text-2xl mr-170">Interview Helper</h2>
            <li><Link className="text-purple-400 hover:underline" to="/">Home</Link></li>
            <li><Link className="text-purple-400 hover:underline" to="/dashboard">Dashboard</Link></li>
            <li><Link className="text-purple-400 hover:underline" to="/resources">Resources</Link></li>
            <li><Link className="text-purple-400 hover:underline" to="/interview-practice">Interview Practice</Link></li>
            <li><Link className="text-purple-400 hover:underline" to="/virtual-interview">Virtual Interviewer</Link></li>
            <li><Link to='/user'><UserIcon/></Link></li>
        </ul>
    </nav>
  );
};

export default Header;
