const Button = ({
  children,
  bg_color = "bg-button-2",
  px = "px-4",
  py = "py-2",
  className = ""
}) => {
  return (
    <>
      <button
        className={`${bg_color} flex justify-center items-center border-none text-white ${px} ${py} rounded-4xl cursor-pointer text-xs md:text-base font-semibold ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
