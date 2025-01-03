const Button = ({ text, lite }) => {
  return (
    <>
      <a
        href="/src/signUp.html"
        className={`text-[16px] font-[500] px-[26px] py-[13px] rounded-[15px] border-[#369536] border-[1px]  cursor-pointer navTrans ${
          lite
            ? "bg-[transparent] text-[#369536] hover:bg-[#369536] hover:text-[#FDFDF3]"
            : "bg-[#369536] text-[#FDFDF3] hover:bg-[transparent] hover:text-[#369536]"
        }`}
      >
        {text}
      </a>
    </>
  );
};

export default Button;