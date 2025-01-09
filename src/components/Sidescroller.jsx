import Phrase from "./Phrase";

const Sidescroller = ({ direction }) => {
  return (
    <>
      <section
        className="max-w-screen scroller bg-[#EAF4E8] my-5"
        data-animated="true"
        data-direction={direction}
      >
        <ul className="flex flex-row items-center py-1 space-x-5 scroller_inner whitespace-nowrap">
          <Phrase />
          <Phrase />
          <Phrase />
          <Phrase />
          <Phrase />
          <Phrase />
        </ul>
      </section>
    </>
  );
};

export default Sidescroller;
