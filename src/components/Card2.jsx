import React from 'react'

const Card2 = ({img1,img2,heading,info}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center ">
              <div className=" w-[248px] h-[248px] lg:w-[295px] lg:h-[295] flex justify-center ">
                <div className="absolute z-[100] top-[40px]" >
                  <div className="w-[143px] h-[154px] absolute z-[100] mt-[60px] lg:mt-[80px]  ml-[40px] ">
                  <img src={img1} className="" alt="" />
                </div>
                <div className="w-[248px] lg:w-[295px] ">
                  <img src={img2} className="" alt="" />
                </div>
                </div>
              </div>
            
              <div className="bg-slate-800 w-[345px] lg:w-[505px] h-[301px] lg:ml-[25px] text-white lg:mt-[153px] rounded-[35px] p-12">
                <div className="">
                  <div className="mt-5">
                    <p className="font-medium text-[32px] leading-10">
                      {heading}
                    </p>
                  </div>
                  <div className="  mt-4">
                    <p className="font-normal text-base md:leading-5">
                      {info}
                    </p>
                  </div>
                </div>
              </div>
              </div>
  )
}

export default Card2






