import logoImg from "/src/assets/images/Frame 167.png";

const Loader = ({ loader }) => {
  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center min-h-screen blurloadBg tLoaderCont ${
          loader ? "tLhide" : undefined
        }`}
      >
        <div className="flex flex-row p-[30px] bg-[transparent] border-[1px] border-[transparent] relative z-10 justify-center items-center">
          <div className="w-[60px] h-[60px] -translate-x-1">
            <img src={logoImg} alt="logo" className="w-full h-full" />
          </div>
          <div className="bg-[transparent] border-[10px] border-[#369536] border-x-[transparent]  rounded-full absolute w-[120px] h-[120px] -z-[10] loadAnimate"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
