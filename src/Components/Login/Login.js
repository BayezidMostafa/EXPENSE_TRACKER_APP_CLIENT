import React, { useState } from "react";
import LoginModal from "../Loginmodal/LoginModal";
import { BsArrowReturnRight } from "react-icons/bs";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-[#FFC248] "
      data-aos="zoom-out"
    >
      <p className="text-4xl font-bold">Please Login</p>
      <BsArrowReturnRight
        onClick={() => setShowModal(true)}
        className="text-4xl font-bold cursor-pointer"
      />
      <LoginModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Login;
