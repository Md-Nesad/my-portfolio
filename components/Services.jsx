export default function Services({ children, text, icon }) {
  return (
    <>
      <div className=" bg-gray-50 space-y-5 h-[300px] rounded-2xl p-7 text-center relative drop-shadow-xl">
        <h1 className=" absolute top-[-25px] left-[40%] text-[#F59E18]">
          {icon}
        </h1>
        <h1 className="pt-5">{text}</h1>
        <p>{children}</p>
      </div>
    </>
  );
}
