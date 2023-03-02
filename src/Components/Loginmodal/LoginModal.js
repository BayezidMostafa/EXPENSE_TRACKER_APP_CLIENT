import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthContext";

const LoginModal = ({ isVisible, onClose }) => {
  const { googleProviderLogin } = useContext(AuthenticationContext);
  const Navigate = useNavigate();
  if (!isVisible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleGoogleLogin = () => {
    googleProviderLogin().then((data) => {
      const user = data.user;
      console.log(user);
      onClose();
      Navigate("/dashboard");
    });
  };

  return (
    <div
      id="wrapper"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-70 md:pt-6 md:px-5 pt-3 px-3 flex justify-center items-center"
    >
      <div
        data-aos="zoom-in"
        className="flex justify-center items-center lg:min-w-[30vw] lg:min-h-[20vh] md:min-h-[20vh] md:min-w-[40vw] min-h-[20vh] min-w-[50vw] bg-white rounded-md"
      >
        <div
          onClick={handleGoogleLogin}
          className="flex items-center gap-5 cursor-pointer"
        >
          <FcGoogle className="text-6xl" />
          <span className="text-4xl font-bold">Google Log In</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
