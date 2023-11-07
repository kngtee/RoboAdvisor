import { useState } from "react";

const Range = () => {
  const [data, setData] = useState(0);
  return (
    <div className="px-6 py-4 max-w-[450px] bg-primaryColor rounded-md mt-5 shadow-2xl">
      <label
        htmlFor="risk"
        className="block mb-1 text-[14px] leading-7 font-semibold text-bgColor"
      >
        Risk Score:
      </label>
      <input
        id="risk"
        className="range accent-bgColor w-full h-2 bg-textColor shadow-xl rounded-lg appearance-none cursor-pointer "
        type="range"
        min="0"
        max="10"
        step={1}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default Range;
