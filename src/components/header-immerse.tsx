import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoMdArrowRoundBack } from "react-icons/io";

function BackIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'purple', size: '20px' }}
      >
        <div>
          <IoMdArrowRoundBack />
        </div>
      </IconContext.Provider>
    );
}

const Header = () => {
  return (
    <nav className="bg-purple-50 place-content-center">
        <ul className="flex space-x-7 mt-3.5 mb-0 place-content-center">
            <li><Link className="mr-300" to="/"><BackIcon/></Link></li>
            <h2 className="text-purple-500 text-l">Interview Helper</h2>
        </ul>
    </nav>
  );
};

export default Header;
