import "./App.css";
import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import team1 from "./assets/lion.png";
import team2 from "./assets/CA.png";
import team3 from "./assets/w.png";
import team4 from "./assets/IM.png";
import team5 from "./assets/thor.png";
import team6 from "./assets/dr.png";
import people from "./assets/people.png";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// import img1 from "./assets/Group 485 (1).png";
import card1img from "./assets/Group 835.png";
import card2img from "./assets/Group 837.png";
import card3img from "./assets/Group 838.png";
import card4img from "./assets/Group 839.png";
import img2 from "./assets/01.png";
import img3 from "./assets/Vector.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Cards from "./components/Cards";
import PhnCard from "./components/PhnCard";
import ImgCard from "./components/ImgCard";
import Card2 from "./components/Card2";

import PhnImgCard from "./components/PhnImgCard";

function App() {
  const options = ["Our Story", "Our Mission", "Our Vision", "Careers"];

  const defaultOption = options[0];
  const data = [
    {
      img: card2img,
      heading: `Empowerment
      Through Innovation`,
      info: `We believe in empowering our team just as much as we empower our users. Work with cutting-edge technology and have the freedom to explore creative solutions that make real-world impact.`,
    },
    {
      img: card3img,
      heading: `A Culture of Learning`,
      info: `Just like our platform, we foster an environment of continuous personal and professional growth. Benefit from mentorships within our own team, access to courses, and regular workshops.`,
    },
    {
      img: card1img,
      heading: `Diverse and Inclusive`,
      info: `Just like our platform, we foster an environment of continuous personal and professional growth. Benefit from mentorships within our own team, access to courses, and regular workshops.`,
    },
    {
      img: card4img,
      heading: `Work-Life Harmony`,
      info: `We support our team with flexible working hours, remote work options, and an understanding that your life outside of work is just as important as your professional achievements.`,
    },
  ];

  const cardData = [
    {
      img: team1,
      title: "Simba",
      para: "Power of true",
    },
    {
      img: team2,
      title: "Sreedhar",
      para: "Design",
    },
    {
      img: team3,
      title: "Aparna",
      para: "Engineering",
    },
    {
      img: team4,
      title: "Sai Krishan",
      para: "Engineering",
    },
    {
      img: team5,
      title: "Tarun",
      para: "intern",
    },
    {
      img: team6,
      title: "Sai",
      para: "intern",
    },
  ];

  const cardData2 = [
    {
      img1: img2,
      img2: img3,
      heading: "Integrity",
      info: " Own Your Actions:We hold ourselves accountable taking full responsibility for our actions and commitments, fostering a culture of trust and dependability.",
    },
    {
      img1: img2,
      img2: img3,
      heading: "Integrity",
      info: " Own Your Actions:We hold ourselves accountable taking full responsibility for our actions and commitments, fostering a culture of trust and dependability.",
    },
    {
      img1: img2,
      img2: img3,
      heading: "Integrity",
      info: " Own Your Actions:We hold ourselves accountable taking full responsibility for our actions and commitments, fostering a culture of trust and dependability.",
    },
  ];

  return (
    <div className="">
      <section className="w-full h-auto  ">
        <div className="max-w-[1400px] w-full m-auto  h-[90px] flex justify-between items-center p-10">
          <div className="flex gap-10">
            <img className="w-48 h-9" src={logo} alt="" />
            <ul className="hidden lg:flex gap-10">
              <li className="text-lg font-bold text-[#646464]">Mentors List</li>
              <li className="text-lg font-bold  text-[#646464]">
                Mentees List
              </li>
              <li className="text-lg font-bold  text-[#646464]">
                Students List
              </li>
              <li className="text-lg font-bold  text-[#646464]">About Us</li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-7">
            <div className=" text-[#646464] border-[1px] w-28 h-12 rounded-lg flex justify-center items-center text-lg font-bold border-gradient-to-r from-cyan-500 to-blue-500">
              <p>login</p>
            </div>
            <div className=" text-[#646464] w-48 h-12 flex justify-center items-center text-lg font-bold border-[1px] rounded-lg  bg-border-gradient-to-r from-cyan-500 to-blue-500">
              <p>Become a Mentor</p>
            </div>
          </div>
          <div className="lg:hidden">
            {/* <RxCross2 size={40} /> */}
            <IoMdMenu className="text-[#69BC56]" size={40} />
          </div>
        </div>
        <hr className="w-full h-4" />
        <div className="max-w-[1400px] w-full m-auto  h-[50px] flex justify-start items-center pl-10 pb-5">
          <div className="flex gap-10">
            <div className="text-lg font-bold pt-2 pb-2 pl-4 pr-4 rounded-lg  text-[#646464]">
              About Us
            </div>
            <div className="hidden lg:flex gap-10">
              <div className="text-lg font-bold pt-2 pb-2 pl-4 pr-4 rounded-lg bg-[#F0FFED]  text-[#646464]">
                Our Story
              </div>
              <div className="text-lg font-bold pt-2 pb-2 pl-4 pr-4 rounded-lg bg-[#F0FFED]  text-[#646464]">
                Our Mission
              </div>
              <div className="text-lg font-bold pt-2 pb-2 pl-4 pr-4 rounded-lg bg-[#F0FFED] text-[#646464]">
                Our Vision
              </div>
              <div className="text-lg text-white font-bold pt-2 pb-2 pl-4 pr-4 rounded-lg bg-[#69BC56]">
                Careers
              </div>
            </div>

            <Dropdown
              className="lg:hidden"
              options={options}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 w-full h-[80vh] md:h-[100vh] lg:h-[65vh]">
        <div className="w-full h-full flex flex-col  justify-center items-center">
          <div className="w-full h-[25%] md:h-[40%] flex items-end justify-center">
            <h1 className="text-[#404040] font-medium text-5xl md:text-6xl text-center">
              Careers at
              <br /> Right Mentor
            </h1>
          </div>
          <div className=" relative w-full h-[60%] flex justify-center  pt-10 pb-10">
            <div className="hidden md:block w-[330px] h-[330px] ml-[-100px] ">
              <div className="absolute top-[-30px] md:top-[-15px] lg:top-[-30px] ">
                <img className="w-[330px] h-[330px]" src={hero} alt="" />
              </div>
            </div>
            <div className=" w-[250px] md:w-[300px] lg:w-[470px]">
              <h1 className="text-2xl font-medium">
                Join Our Mission to <br /> Transform Mentorship
              </h1>
              <p className="text-base md:text-lg font-medium pt-3 md:pt-0">
                At Right Mentor, we're more than just a platform; we're a
                movement to make meaningful mentorship accessible to everyone.
                If you’re passionate about making a difference and ready to
                innovate, inspire, and lead, you belong at Right Mentor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto pb-10 bg-slate-100">
        <div className="lg-cards w-full m-auto flex  justify-center lg:hidden">
          <Swiper spaceBetween={5} slidesPerView={1} centeredSlides={true}>
            {data.map((item, id) => (
              <SwiperSlide>
                <Cards
                  id={id}
                  img={item.img}
                  heading={item.heading}
                  info={item.info}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg-cards max-w-7xl  m-auto  hidden lg:flex  ">
          <div className=" flex justify-center flex-wrap m-auto align-middle gap-4">
            {data.map((item, id) => (
              <PhnCard
                id={id}
                img={item.img}
                heading={item.heading}
                info={item.info}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 pt-16 w-full h-auto">
        <div className="max-w-7xl md:m-auto w-full h-auto flex flex-col justify-center items-center ">
          <div className="w-full h-auto">
            <h1 className="text-[#404040] font-medium text-5xl md:text-6xl text-center">
              Meet
              <br />
              Our Team
            </h1>
          </div>

          <div className="w-[275px]  md:w-[450px] lg:w-[550px]  pt-8 lg:ml-[30%]">
            <h1 className="text-[22px] md:text-2xl font-medium">
              Get to Know the Innovators <br /> Behind Right Mentor
            </h1>
            <p className="text-base md:text-lg font-medium  pt-8">
              Our team is composed of passionate professionals from diverse
              backgrounds, each bringing unique skills and insights to the
              table. United by a shared commitment to democratizing mentorship,
              we are dedicated to creating a platform that empowers individuals
              to achieve their fullest potential. Discover the faces and stories
              of the people who make Right Mentor possible.
            </p>
          </div>
        </div>
        <div className="hidden max-w-6xl h-auto m-auto md:flex justify-center flex-wrap mt-28 p-4 md:p-10 gap-10">
          {cardData.map((item, id) => {
            return (
              <ImgCard
                id={id}
                img={item.img}
                title={item.title}
                para={item.para}
              />
            );
          })}

          <div className="w-[343px] md:w-[430px] h-[245px] md:h-[301px] bg-[#69BC56] rounded-3xl md:rounded-[25px] mt-10 p-10 ">
            <div className="w-full h-full flex flex-col justify-between ">
              <div className="w-full h-auto">
                <h1 className=" hidden md:block md:text-4xl text-white font-medium mt-2">
                  Work With US
                </h1>
                <h1 className=" text-3xl md:hidden text-white font-medium mt-2">
                  Work <br /> With US
                </h1>
                <p className="hidden md:block text-2xl text-white font-medium pt-2">
                  {" "}
                  Be Part of Something Great
                </p>
              </div>
              <div className="w-32  md:w-40 h-[60px] bg-white flex justify-center items-center rounded-2xl">
                <p className="text-[#69BC56] text-base font-bold">Apply Now</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl h-auto flex md:hidden justify-center flex-wrap mt-5 md:mt-28 p-3 md:p-10 gap-10">
          <Swiper spaceBetween={5} slidesPerView={2}>
            {cardData.map((item, id) => {
              return (
                <SwiperSlide>
                  <PhnImgCard
                    id={id}
                    img={item.img}
                    title={item.title}
                    para={item.para}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="w-[343px] md:w-[430px] h-[245px] md:h-[301px] bg-[#69BC56] rounded-3xl md:rounded-2xl  md:mt-10 p-10 ">
            <div className="w-full h-full flex flex-col justify-between ">
              <div className="w-full h-auto">
                <h1 className=" md:text-4xl text-white font-medium">
                  Work With US
                </h1>
                <h1 className=" text-3xl md:hidden text-white font-medium">
                  Work <br /> With US
                </h1>
                <p className="hidden md:block text-2xl text-white font-medium pt-2">
                  {" "}
                  Be Part of Something Great
                </p>
              </div>
              <div className="w-32  md:w-40 h-[60px] bg-white flex justify-center items-center rounded-2xl">
                <p className="text-[#69BC56] text-base font-bold">Apply Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto  bg-slate-100 pt-20 pb-10">
        <div className="relative z-[10] w-full h-auto flex-col justify-center items-center">
          <div className=" w-full flex justify-center  text-center">
            <p className="text-[#404040] w-[300px]  lg:w-[586px] font-bold text-[42px] lg:text-[64px] md:leading-[64px]  ">
              Our <br />
              Inspirations
            </p>
          </div>
          <div className="relative z-[10] w-full flex justify-center items-center flex-col  gap-3 pt-7">
            <div className="w-[260px] md:w-[539px] md:h-[210px] lg:ml-[22%]">
              <p className="w-[260px] md:w-[312px] md:h-[57px] font-medium text-2xl leading-7 text-[#404040]">
                Driven by Visionaries: The Minds That Motivate Us
              </p>

              <p className="font-medium text-lg leading-6 pt-5 text-[#404040]">
                At Right Mentor, we are inspired by pioneers like Elon Musk,
                Steve Jobs, and other transformative figures. Their innovation
                and leadership motivate us to push boundaries and redefine
                what's possible in mentorship and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-[100] w-full h-auto ">
          <div className="w-full h-[550px] lg:h-[350px] relative">
            <div className="w-full flex flex-col lg:flex-row justify-center absolute lg:top-[-150px]  ">
              <Swiper spaceBetween={5} slidesPerView={1} centeredSlides={true}>
                <SwiperSlide>
                  <div className="w-full flex flex-col lg:flex-row items-center justify-center ">
                    <div className=" w-[248px] h-[248px] lg:w-[295px] lg:h-[295] flex justify-center ">
                      <div className="absolute z-[100] top-[40px]">
                        <div className="w-[248px] lg:w-[295px] ">
                          <img src={people} className="" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800 w-[345px] lg:w-[505px] h-[301px] lg:ml-[25px] text-white lg:mt-[153px] rounded-[35px] p-12">
                      <div className="">
                        <div className="mt-5">
                          <p className="font-medium text-[32px] leading-10">
                            Stay hungry, <br /> stay foolish.
                          </p>
                        </div>
                        {/* <div className="  mt-4">
                    <p className="font-normal text-base md:leading-5">
                      Own Your Actions: <br /> We hold ourselves accountable,
                      taking full responsibility for our actions and
                      commitments, fostering a culture of trust and
                      dependability.
                    </p>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex flex-col lg:flex-row items-center justify-center ">
                    <div className=" w-[248px] h-[248px] lg:w-[295px] lg:h-[295] flex justify-center ">
                      <div className="absolute z-[100] top-[40px]">
                        <div className="w-[248px] lg:w-[295px] ">
                          <img src={people} className="" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800 w-[345px] lg:w-[505px] h-[301px] lg:ml-[25px] text-white lg:mt-[153px] rounded-[35px] p-12">
                      <div className="">
                        <div className="mt-5">
                          <p className="font-medium text-[32px] leading-10">
                            Stay hungry, <br /> stay foolish.
                          </p>
                        </div>
                        {/* <div className="  mt-4">
                    <p className="font-normal text-base md:leading-5">
                      Own Your Actions: <br /> We hold ourselves accountable,
                      taking full responsibility for our actions and
                      commitments, fostering a culture of trust and
                      dependability.
                    </p>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex flex-col lg:flex-row items-center justify-center ">
                    <div className=" w-[248px] h-[248px] lg:w-[295px] lg:h-[295] flex justify-center ">
                      <div className="absolute z-[100] top-[40px]">
                        <div className="w-[248px] lg:w-[295px] ">
                          <img src={people} className="" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800 w-[345px] lg:w-[505px] h-[301px] lg:ml-[25px] text-white lg:mt-[153px] rounded-[35px] p-12">
                      <div className="">
                        <div className="mt-5">
                          <p className="font-medium text-[32px] leading-10">
                            Stay hungry, <br /> stay foolish.
                          </p>
                        </div>
                        {/* <div className="  mt-4">
                    <p className="font-normal text-base md:leading-5">
                      Own Your Actions: <br /> We hold ourselves accountable,
                      taking full responsibility for our actions and
                      commitments, fostering a culture of trust and
                      dependability.
                    </p>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto  bg-slate-100 pt-20">
        <div className="w-full h-auto flex-col justify-center items-center">
          <div className=" w-full flex justify-center  text-center">
            <p className="text-[#404040] w-[300px]  lg:w-[586px] font-bold text-[42px] lg:text-[64px] md:leading-[64px]  ">
              Core Values: Foundations of Our Culture
            </p>
          </div>
          <div className="relative z-[10] w-full flex justify-center items-center flex-col  gap-3 pt-7">
            <div className="w-[260px] md:w-[539px] md:h-[210px] lg:ml-[22%]">
              <p className="w-[260px] md:w-[312px] md:h-[57px] font-medium text-2xl leading-7 text-[#404040]">
                Shaping Excellence Through Our Principles
              </p>

              <p className="font-medium text-lg leading-6 pt-5 text-[#404040]">
                These core values embody the spirit and integrity of our work,
                guiding us in making decisions and building relationships that
                are not only beneficial but also uphold the highest standards of
                professionalism and ethics. Each value is a cornerstone that
                ensures we continue to grow, innovate, and lead with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto ">
          <div className="w-full h-[550px] lg:h-[350px] relative">
            <div className="w-full flex flex-col lg:flex-row justify-center absolute lg:top-[-150px]  ">
              <Swiper spaceBetween={5} slidesPerView={1} centeredSlides={true} pagination={{ clickable: true }}>
                {cardData2.map((item, id) => (
                  <SwiperSlide>
                    <Card2
                      key={id}
                      id={id}
                      img1={item.img1}
                      img2={item.img2}
                      heading={item.heading}
                      info={item.info}
                    />
                  </SwiperSlide>
                ))}

               
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className=".bg-custom-gradient w-full h-auto flex justify-center items-center bg-slate-100 pt-20 pb-20 p-5 ">
        <div className="md:w-[1030px] md:h-[426px] m-auto w-[343px] h-[417px]  rounded-3xl bg-lime-500 text-white flex justify-center items-center">
          <div className="md:w-[507px] md:h-[306px] w-[330px] h-[400px] flex flex-col justify-center items-center ">
            <div className="md:w-[507px] md:h-[128px] w-[281px] h-[126px] ">
              <p className="font-medium text-center md:text-6xl text-5xl leading-[42px]">
                Be Part of Something Great
              </p>
            </div>
            <div className="md:w-[506px] md:h-[58px] w-[270px] h-[42px] md:mt-9 mt-4">
              <p className="font-normal text-lg md:text-2xl text-center leading-[20.64px]">
                Be part of something great. Work with us and transform lives
                through mentorship.
              </p>
            </div>
            <div className="md:w-[191px] w-[155px] h-[60px] rounded-[20px] bg-white  flex justify-center mt-10 ">
              <button className="font-bold text-lg leading-[20px] text-lime-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
