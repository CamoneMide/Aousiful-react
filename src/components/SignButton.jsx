const SignButton = ({ text, href }) => {
  return (
    <>
      <a
        href={href}
        className="w-full text-[21px] md:text-[25px] font-[700] p-[8px] rounded-[8px] border-[#369536] border-[1px] cursor-pointer navTrans bg-[#369536] text-[#FFFFFFF2] hover:bg-[#fefef8] hover:text-[#369536] logShadow"
      >
        {text}
      </a>
    </>
  );
};

export default SignButton;
