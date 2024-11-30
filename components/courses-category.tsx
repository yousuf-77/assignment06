import Image from "next/image"
export default function CoursesCategory(){
  return(
    <section>
        <div className="h-[1049px] flex flex-col justify-around">
          <div className="w-[60%] h-[109px] flex flex-col justify-between mx-auto items-center">
            <h2 className="text-[48px] font-bold leading-[57.6px] text-left">
              Explore Courses By Category
            </h2>
            <p className="text-[18px] font-normal leading-[27px] text-left">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="h-[636px] flex flex-col justify-between items-stretch">
            <div className="h-[132px] flex items-center justify-around">
              <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/pen-tool.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                    Design & Development
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
              <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/volume-high.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                  Marketing
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
              <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/twist-arrow.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                    Development
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[132px] flex items-center justify-around">
            <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/microphone.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                  Communication
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
              <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/circles.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                  Digital Marketing
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
              <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/arrow-2.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                  Self Development
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[132px] flex items-center justify-around">
            <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/briefcase.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                  Business
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
              <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/open-book.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                  Finance
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
              <div className="w-[32.08%] h-[100%] rounded-[5px] bg-[#F7F7F7] flex justify-around items-center">
                <div className="bg-white w-[100px] h-[100px] flex justify-center items-center">
                  <Image
                    src={"/images/courses-category/closed-book.svg"}
                    width={32}
                    height={32}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-[60.06%] h-[57px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-left">
                  Consulting
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-left">
                    50+ Courses Available
                  </p>
                </div>
              </div>
            </div>
            <button className="w-[155px] h-[48px] rounded-[5px] border border-black text-[16px] font-normal leading-[24px] text-center mx-auto ">View All Courses</button>
          </div>
        </div>
      </section>
  )
}