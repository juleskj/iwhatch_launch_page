import { FaApple } from "react-icons/fa";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <a href="#">
              <FaApple />
            </a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">iWatch</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
