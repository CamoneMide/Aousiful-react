import { FormInput, Logo, SignButton } from "../components";
import { circleImages } from "../constants";
import { Link } from "react-router-dom";
import logoImg from "/src/assets/images/Frame 167.png";
import googleSignIcon from "/src/assets/icons/Google-signIcon.png";
import facebookSignIcon from "/src/assets/icons/Facebook-signIcon.png";

const SignUpPage = () => {
  return (
    <>
      <section className="min-h-[100vh] min-w-[100vw] flex flex-col lg:grid lg:grid-cols-2 interF gap-0">
        <div className="w-full h-full signBgImg px-[40px] py-[20px] lg:flex lg:flex-col justify-between hidden rounded-[8px]">
          <div className="text-[#369536]">
            <Logo />
          </div>
          <div className="text-[#FFFFFF] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[58px] md:text-[62px] leading-[76px] font-[700]">
                <span className="text-[#369536] bg-[rgba(255,255,255,0.7)] px-2 mr-1 rounded-[30px] backdrop-blur-lg border-[1px] spShadow">
                  Your Next
                </span>
                Home is Just a Click Away
              </h2>
              <p className="text-[16px] md:text-[20px] font-[600] text-[#FDFDF3F2] ">
                Join our community and discover beautiful rental homes that fit
                your lifestyle. Signing up is quick, easy, and free
              </p>
            </div>
            <div className="flex flex-row items-center justify-start pb-[20px]">
              <div className="relative flex flex-row items-center justify-start w-full">
                {circleImages.map((circleImage, index) => {
                  const myStyle = {
                    transform: `translateX(${index * 70}%)`,
                    zIndex: { index },
                    // left: `${index * 70}%`,
                  };

                  return (
                    <img
                      key={circleImage.id}
                      className="absolute left-0"
                      src={circleImage.src}
                      width={50}
                      height={50}
                      alt={circleImage.alt}
                      style={myStyle}
                    />
                  );
                })}
              </div>
              <div className="text-[#FBE065] flex flex-row text-[22px] -ml-[350px]">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>

              <p className="ml-[10px] text-[16px] font-[700] text-[#373737]">
                4.8 (2.2k review)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[100vh] h-full signBgImg md:px-[10%] px-[5%] lg:px-[0] lg:py-[0] pb-[10%]">
          <div className="text-[#369536] flex lg:hidden pb-[9%] pt-[5%]">
            <div className="shadow-md backdrop-blur bg-[rgba(255,255,255,0.2)] px-[5px] rounded-[8px]">
              <Link
                to={"/"}
                className="text-[24px] md:text-[28px] font-normal flex items-center carterOneF"
              >
                Aousiful
                <span className="">
                  <img width="35" height="35" src={logoImg} alt="logo" />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full h-full px-[10%] lg:px-[12%] py-[14%] md:py-[20%] lg:py-[4%] bg-[rgba(255,255,255,0.6)] lg:bg-[#fdfdf3] flex flex-col justify-center rounded-[8px] lg:rounded-none lg:shadow-none shadow-md backdrop-blur">
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-[32px] md:text-[36px] text-[#000000F2] font-[700]">
                Create an account
              </h2>
              <h6 className="text-[17px] md:text-[21px] text-[#000000F2] font-[500] mb-[10px]">
                Already have an account?
                <a
                  href="/signIn"
                  className="text-[#369536] underline ml-2 hover:no-underline"
                >
                  Log In
                </a>
              </h6>
              <form className="flex flex-col w-full gap-[20px]">
                <div className="flex flex-row justify-between w-full gap-[20px]">
                  <div>
                    <FormInput
                      label={"First Name"}
                      type={"text"}
                      icon1={"bx bxs-user"}
                      icon2={"hidden"}
                    />
                  </div>
                  <div>
                    <FormInput
                      label={"Last Name"}
                      type={"text"}
                      icon1={"bx bxs-user"}
                      icon2={"hidden"}
                    />
                  </div>
                </div>
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
                <div className="text-[14px] md:text-[18px] font-[500] flex flex-row">
                  <label className="text-[#000000F2] flex flex-row cursor-pointer">
                    <input type="checkbox" name="checkbox" className="mr-2" />I
                    agree to the
                  </label>
                  <a
                    href="/"
                    className="text-[#369536] underline ml-2 hover:no-underline"
                  >
                    Terms & Privacy
                  </a>
                </div>
                <div className="flex justify-center text-center ">
                  <SignButton text={"Create account"} href={"/signIn"} />
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
                    <img src={googleSignIcon} alt="Google-signIcon" />
                  </span>
                  Sign up with Google
                </a>
                <a
                  href="/"
                  className="text-center w-full text-[14px] md:text-[18px] font-[600] p-[10px] rounded-[8px] border-[#369536] border-[1px] cursor-pointer navTrans bg-[#fefef8] text-[#000000F2] hover:underline flex justify-center"
                >
                  <span className="mr-2">
                    <img src={facebookSignIcon} alt="Facebook-signIcon" />
                  </span>
                  Sign up with Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
