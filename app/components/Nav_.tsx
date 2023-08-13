interface Nav_Props {}

const Nav_ = ({}: Nav_Props) => {
  return (
    <div
      className={`w-full h-[80px] flex flex-row justify-between items-center px-4 mt-[50px]`}
    >
      <div className={`min-w-[150px] h-[50px] rounded-[4px] flex flex-row justify-center items-center`}>
        <div className={`w-[150px] h-full bg-black/30 rounded-[4px] mx-1`}></div>
        <div className={`w-[350px] h-full bg-black/30 rounded-[4px] mx-1`}></div>
      </div>

      <div className={`min-w-[150px] h-[50px] rounded-[4px] flex flex-row justify-center items-center`}>
        <div className={`w-[150px] h-full bg-black/30 rounded-[4px] mx-1`}></div>
        <div className={`w-[50px] h-full bg-black/30 rounded-[4px] mx-1`}></div>
      </div>
    </div>
  );
};

export default Nav_;
