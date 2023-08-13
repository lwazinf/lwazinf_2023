interface Options_Props {}

const Options_ = ({}: Options_Props) => {
    const data_ = ['']
  return (
    <div
      className={`w-full min-h-[400px] flex flex-col justify-start items-center px-4 mt-8`}
    >
      <div
        className={`w-full h-[50px] flex flex-row justify-between items-center rounded-[4px] m-1 mb-4`}
      >
        <div
          className={`w-[150px] h-[40px] bg-black/30 rounded-[4px] m-1`}
        ></div>
        <div
          className={`w-[150px] h-[40px] bg-black/30 rounded-[4px] m-1`}
        ></div>
      </div>
      {
        data_.map((obj, index) => (
          <OptionItem_ key={index} />
        ))
      }
    </div>
  );
};

export default Options_;


interface OptionItem_Props {
    
}
 
const OptionItem_ = ({}:OptionItem_Props) => {
    return ( 
        <div
        className={`w-full min-h-0 flex flex-row justify-start items-center rounded-[4px] mb-8`}
      >
        <div
          className={`w-[250px] min-h-[200px] justify-center items-start flex flex-col`}
        >
          <div
            className={`w-[250px] h-[200px] bg-black/30 rounded-[4px] m-1`}
          ></div>
          <div
            className={`w-[150px] h-[30px] flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1`}
          ></div>
          <div
            className={`w-[250px] h-[60px] flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1`}
          ></div>
          <div
            className={`w-[250px] h-[60px] flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1`}
          ></div>
          <div
            className={`w-[150px] h-[30px] flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1 mt-3`}
          ></div>
        </div>
      </div>
     );
}