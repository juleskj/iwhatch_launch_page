import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ArrowPageChange = () => {
  return (
    <div className="flex flex-row items-center">
      <span className="p-2 m-1 ">
        <FaLongArrowAltLeft />
      </span>
      <p>1</p>
      <span className="p-2 m-1 ">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

export default ArrowPageChange;
