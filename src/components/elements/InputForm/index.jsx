import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputForm = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  errorMessage
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-white text-base">{label}</label>
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 rounded-full bg-transparent text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        {type === "password" && (
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputForm;
