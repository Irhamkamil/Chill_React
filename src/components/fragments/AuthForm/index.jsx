import { Link } from "react-router-dom";

const AuthForm = ({
  title,
  subtitle,
  children,
  submitText,
  redirectText,
  redirectLink,
  redirectBtn,
  onSubmit,
  sizeCard
}) => {
  return (
    <div
      className={`bg-bg-2 bg-opacity-80 rounded-xl p-10 flex flex-col items-center ${sizeCard} `}
    >
      {/* Logo */}
      <img src="/assets/logo.svg" alt="Chill Logo" className="w-24 md:w-28" />

      {/* Header */}
      <div className="text-center mt-6">
        <h3 className="text-2xl md:text-3xl text-white font-bold">{title}</h3>
        <span className="text-gray-400">{subtitle}</span>
      </div>

      {/* Form */}
      <form
        className="mt-8 w-full flex flex-col items-center"
        onSubmit={onSubmit}
      >
        {children}

        {/* Redirect */}
        {redirectText && redirectLink && (
          <div className="flex justify-between text-sm text-white mt-4 w-full">
            <div>
              <span className="text-gray-400">{redirectText} </span>
              <Link to={redirectLink} className="text-white">
                {redirectBtn}
              </Link>
            </div>
            <a href="#" className="text-white">
              Lupa kata sandi?
            </a>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-6 w-full flex flex-col items-center">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 cursor-pointer"
          >
            {submitText}
          </button>
          <span className="text-gray-400 my-3">Atau</span>
          <button
            type="button"
            className="w-full flex justify-center items-center gap-2 border border-gray-500 text-white py-3 rounded-full hover:bg-gray-700 cursor-pointer"
          >
            <img
              src="/assets/google-logo.svg"
              alt="Google Logo"
              className="w-5"
            />
            Masuk dengan Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
