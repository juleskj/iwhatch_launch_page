const ButtonCTA = (props) => {
  return (
    <button className="w-1/4 py-3 px-1 capitalize rounded-full text-white outline outline-1 outline-white hover:bg-white hover:text-teal-200 bg-transparent">
      {props.text}
    </button>
  );
};

export default ButtonCTA;
