import Lottie from "lottie-react";
import React from "react";
import groovyWalkAnimation from "../../../public/lotties/check.json";
import { Link } from "react-router-dom";

export default function SuccessVerified() {
  return (
    <div className="p-4 rounded-md min-w-[500px] flex justify-center items-center flex-col bg-base-300/40 backdrop-blur-lg">
      <Lottie
        className="w-50"
        animationData={groovyWalkAnimation}
        loop={false}
      />
      <h3 className="text-xl font-bold mt-[-16px]">ایمیل با موفقیت تایید شد</h3>
      <p className="text-sm mt-2">حساب شما فعال شد</p>
      <Link to="/sign-in" className="btn btn-primary mt-4">
        ورود به دویت
      </Link>
    </div>
  );
}
