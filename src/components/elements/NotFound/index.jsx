import { Link } from "react-router-dom";

import NotFoundUrl from "/assets/404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <img
        src={NotFoundUrl}
        alt="404 Not Found"
        className="max-w-lg h-auto -mt-40"
      />
      <Link to="/home" className="-mt-20 text-lg font-semibold hover:underline">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
