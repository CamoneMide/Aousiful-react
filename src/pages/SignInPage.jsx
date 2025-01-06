import React from "react";
import { FormInput, SignButton } from "../components";

const SignInPage = () => {
  let lite = false;

  return (
    <>
      <section className="min-h-[100vh] min-w-[100vw] flex flex-col lg:grid lg:grid-cols-2 interF gap-0">
        <div className="w-full h-full px-[40px] md:px-[80px] py-[80px] lg:py-[40px]  bg-[#fdfdf3] flex flex-col justify-center">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[32px] md:text-[36px] text-[#000000F2] font-[700]">
              Log In
            </h2>
            <h6 className="text-[17px] md:text-[21px] text-[#000000F2] font-[500] mb-[10px]">
              Don’t have account?
              <a href="/signUp" className="text-[#369536] underline ml-1">
                Create account
              </a>
            </h6>
            <form className="flex flex-col w-full gap-[20px]">
              <div>
                <FormInput
                  label={"Email"}
                  type={"email"}
                  icon1={"bx bxs-envelope"}
                  icon2={"hidden"}
                />
              </div>
              <div>
                <FormInput
                  label={"Password"}
                  type={"password"}
                  icon1={"bx bxs-lock"}
                  icon2={"bx bxs-hide"}
                />
              </div>
              <div className="text-[14px] md:text-[18px] font-[500] flex flex-row justify-between">
                <label className="text-[#000000F2] flex flex-row cursor-pointer">
                  <input type="checkbox" name="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="/" className="text-[#369536] underline">
                  Forget Password
                </a>
              </div>
              <div className="flex justify-center text-center ">
                <SignButton text={"Log In"} href={"/"} />
              </div>
              <div className="relative flex items-center justify-center">
                <span className="text-[17px] md:text-[21px] font-[600] px-[10px] cursor-pointer text-[#000000E5] signLine">
                  or
                </span>
              </div>
            </form>
            <div className="flex flex-col w-full gap-[20px]">
              <a
                href="/"
                className="text-center w-full text-[14px] md:text-[18px] font-[600] p-[10px] rounded-[8px] border-[#369536] border-[1px] cursor-pointer navTrans bg-[#fefef8] text-[#000000F2] hover:underline flex justify-center"
              >
                <span className="mr-2">
                  <img
                    src="/src/assets/icons/Google-signIcon.png"
                    alt="Google-signIcon"
                  />
                </span>
                Sign in with Google
              </a>
              <a
                href="/"
                className="text-center w-full text-[14px] md:text-[18px] font-[600] p-[10px] rounded-[8px] border-[#369536] border-[1px] cursor-pointer navTrans bg-[#fefef8] text-[#000000F2] hover:underline flex justify-center"
              >
                <span className="mr-2">
                  <img
                    src="/src/assets/icons/Facebook-signIcon.png"
                    alt="Facebook-signIcon"
                  />
                </span>
                Sign in with Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full signBgImg px-[40px] py-[20px] lg:flex lg:flex-col justify-between hidden">
          <div>Up</div>
          <div>Down</div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;
