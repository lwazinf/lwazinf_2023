interface Focus_Props {}

const Focus_ = ({}: Focus_Props) => {
  return (
    <div
      className={`w-full min-h-[400px] flex flex-col justify-start items-center px-4 mt-8`}
    >
      <div
        className={`w-full h-[200px] flex flex-row justify-start items-center mb-5`}
      >
        <div
          className={`w-full h-full flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1`}
        ></div>
      </div>
      <div
        className={`w-full h-[400px] flex flex-row justify-start items-center`}
      >
        <div
          className={`w-[800px] h-full flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1`}
        ></div>
        <div
          className={`w-[350px] h-full flex flex-col justify-center items-start rounded-[4px] m-1 ml-8`}
        >
          <div
            className={`w-[200px] h-[40px] bg-black/30 rounded-[4px] m-1 mb-3`}
          ></div>
          <div
            className={`w-[350px] h-[100px] bg-black/30 rounded-[4px] m-1`}
          ></div>
          <div
            className={`w-[350px] h-[100px] bg-black/30 rounded-[4px] m-1`}
          ></div>
          <div
            className={`w-[150px] h-[40px] bg-black/30 rounded-[4px] m-1 mt-3`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Focus_;
