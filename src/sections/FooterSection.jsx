import React from "react";

const FooterSection = () => {
  return (
    <>
      <footer className="footBgI">
        <div className="px-5 pt-20 hsFootBlur lg:px-10 interF">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-[15px] pb-5">
            <div className="flex flex-col col-span-3">
              <h2 className="text-[28px] font-normal flex items-center carterOneF text-[#369536] leading-[67px]">
                Aousiful
                <span className="">
                  <img
                    width="35"
                    height="35"
                    src="/src/assets/images/Frame 167.png"
                    alt="logo"
                  />
                </span>
              </h2>
              <p className="leading-[30px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]">
                With a variety of properties and support at every step, finding
                the right rental is simpler than ever with us.
              </p>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Terms & Conditions
              </a>
            </div>
            <div className="flex flex-col col-span-2">
              <h2 className="text-[16px] lg:text-[18px] font-[600] text-[#000000] leading-[62px]">
                Company
              </h2>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                About Us
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Mission & Vision
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Careers
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Blog
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-3">
              <h2 className="text-[16px] lg:text-[18px] font-[600] text-[#000000] leading-[62px]">
                Property Listings
              </h2>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Featured Properties
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                New Listings
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Neighbourhood Guides
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Rental Types (e.g., Apartment)
              </a>
            </div>
            <div className="flex flex-col col-span-2">
              <h2 className="text-[16px] lg:text-[18px] font-[600] text-[#000000] leading-[62px]">
                Support and Help
              </h2>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                FAQs
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Support Centre
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Maintenance
              </a>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Feedback
              </a>
            </div>
            <div className="flex flex-col col-span-2">
              <h2 className="text-[16px] lg:text-[18px] font-[600] text-[#000000] leading-[62px]">
                Get In Touch
              </h2>
              <a
                href=""
                className="leading-[35px] text-[14px] lg:text-[16px] font-[600] text-[#6F7B6ED6]"
              >
                Aous@gmail.com
              </a>
              <div className="flex flex-row items-center justify-between md:justify-start md:space-x-5 leading-[35px] mt-[10px]">
                <a
                  href=""
                  className="text-[24px] p-[10px] flex  bg-[#369536] text-[#FDFDF3] rounded-[12px] border-[#369536] border-[2px] hover:bg-[#FDFDF3] hover:text-[#369536] navTrans"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                <a
                  href=""
                  className="text-[24px] p-[10px] flex  bg-[#369536] text-[#FDFDF3] rounded-[12px] border-[#369536] border-[2px] hover:bg-[#FDFDF3] hover:text-[#369536] navTrans"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href=""
                  className="text-[24px] p-[10px] flex  bg-[#369536] text-[#FDFDF3] rounded-[12px] border-[#369536] border-[2px] hover:bg-[#FDFDF3] hover:text-[#369536] navTrans"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row text-[16px] lg:text-[18px] font-[600] text-[#6F7B6ED6] pb-2 border-t-[2px] border-t-[#6f7b6e99] pt-5">
            <p>Copyright &copy; 2024, Aousiful~React.</p>
            <p className="flex flex-row items-center flex-nowrap">
              <strong>Developed by</strong>
              <a href="#" target="_blank" className="ml-1">
                <i>Camone_Mide</i>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/mide-web-developer"
                target="_blank"
                className="text-[20px] text-[#369536] px-[2px]"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
