import Image from "next/image";
export default function CoursesCategory() {
  return (
    <section>
      <div className="h-[862px] md:h-[1049px] flex flex-col justify-around">
        <div className="w-[90%]  lg:w-[60%] h-[150px] flex flex-col justify-between mx-auto lg:items-start items-center">
          <h2 className="text-[32px] leading-[41.6px] md:text-[46px] lg:text-[48px] font-bold md:leading-[57.6px] text-center md:text-left">
            Explore Courses By Category
          </h2>
          <p className="text-[18px] font-normal leading-[27px]  text-center lg:text-left">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        <div className="h-[636px] flex flex-col justify-between items-stretch">
          <div className="h-[556px] md:h-[132px] flex-col flex items-center flex-wrap md:flex-row  justify-around">
            <div className="w-[88.78%] md:max-w-full max-w-[380px] h-[132px] md:w-[32.08%] md:h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white w-[100px] h-[100px]  md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/pen-tool.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="w-[60.06%] h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Design & Development
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className=" w-[88.78%] max-w-[380px]  md:max-w-full h-[132px] md:w-[32.08%]  md:h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white w-[100px] h-[100px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/volume-high.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="w-[60.06%] h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Marketing
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className=" w-[88.78%] max-w-[380px] md:max-w-full h-[132px] md:w-[32.08%]  md:h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white w-[100px] h-[100px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/volume-high.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="w-[60.06%] h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Development
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div className="hidden h-[132px] md:flex items-center  justify-around">
            <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/microphone.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="w-[60.06%] h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Communication
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/circles.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="w-[60.06%] h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Digital Marketing
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="lg:w-[32.08%] md:w-[31%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/arrow-2.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="lg:w-[60.06%] md:w-auto h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Self Development
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div className="hidden h-[132px] md:flex items-center  justify-around">
            <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/briefcase.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="w-[60.06%] h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Business
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/open-book.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="w-[60.06%] h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Finance
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="lg:w-[32.08%] md:w-[31%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center md:gap-1 md:px-1">
              <div className="bg-white md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center">
                <Image
                  src={"/images/courses-category/closed-book.svg"}
                  width={32}
                  height={32}
                  alt="image"
                ></Image>
              </div>
              <div className="lg:w-[60.06%] md:w-auto h-[57px]">
                <p className="md:text-base lg:text-[20px] font-semibold leading-[30px] text-left">
                  Consulting
                </p>
                <p className="md:text-sm lg:text-[18px] font-normal leading-[27px] text-left">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>

          <button className="w-[155px] h-[48px] rounded-[5px] border border-black text-[16px] font-normal leading-[24px] text-center mx-auto ">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
