import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

const Navigation = () => {
  // ul {
  //   display: flex;
  //   flex-flow: row;
  //   justify-content: space-around;
  //   align-items: center;
  //   gap: 1rem;
  //   font-size: 20px;

  return (
    <header>
      <nav>
        <ul className="flex flex-row justify-around items-center gap-1 ">
          <li className="logo">
            <a href="#">
              <FaApple className="apple_icom" />
            </a>
          </li>
          <section className="inline-flex">
            <li>
              <a
                className="font-md py-2 px-4 m-1 rounded-full hover:bg-white hover:text-[#b7cedb]"
                href="#"
              >
                Mac
              </a>
            </li>
            <li>
              <a
                className="font-md py-2 px-4 m-1 rounded-full hover:bg-white hover:text-[#b7cedb]"
                href="#"
              >
                iPhone
              </a>
            </li>
            <li>
              <a
                className="font-md py-2 px-4 m-1 rounded-full hover:bg-white hover:text-[#b7cedb]"
                href="#"
              >
                iWatch
              </a>
            </li>
            <li>
              <a
                className="font-md py-2 px-4 m-1 rounded-full hover:bg-white hover:text-[#b7cedb]"
                href="#"
              >
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
