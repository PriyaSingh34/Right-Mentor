import React from "react";

const InspirationCard = ({ img1, quote, img2, author }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center ">
      <div className=" w-[248px] h-[248px] lg:w-[295px] lg:h-[295] flex justify-center ">
        <div className="absolute z-[100] top-[40px]">
          <div className="w-[248px] lg:w-[295px] ">
            <img src={img1} className="" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-slate-800 w-[345px] lg:w-[505px] h-[301px] lg:ml-[25px] text-white lg:mt-[153px] rounded-[35px] p-12">
        <div className="">
          <div className="mt-4">
            <div className="w-[230px]">
            <p className="font-medium text-[32px] leading-10">{quote}</p>
            </div>
           
            <div className="flex text-center gap-44">
              <img className="mt-16" src={img2} alt="" />
              <p className="mt-16 ">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
