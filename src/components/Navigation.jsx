import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <a href="#">
              <FaApple className="apple_icom" />
            </a>
          </li>
          <section className="inline-flex">
            <li>
              <a className="py-2 px-4 m-1 rounded-full hover:bg-white" href="#">
                Mac
              </a>
            </li>
            <li>
              <a className="py-2 px-4 m-1 rounded-full hover:bg-white" href="#">
                iPhone
              </a>
            </li>
            <li>
              <a className="py-2 px-4 m-1 rounded-full hover:bg-white" href="#">
                iWatch
              </a>
            </li>
            <li>
              <a className="py-2 px-4 m-1 rounded-full hover:bg-white" href="#">
                Support
              </a>
            </li>
          </section>
          <div className="inline-flex">
            <li>
              <a href="#" className="px-3 border-r-2">
                <CiSearch />
              </a>
            </li>
            <li>
              <a className="px-3" href="#">
                <CiShoppingBasket />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
