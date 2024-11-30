import Image from "next/image"
export default function Courses(){
  return(
    <section>
      <div className="h-[1742px] w-full flex flex-col gap-[60px] items-center justify-center">
        <div className="h-[118px] w-[60%] flex flex-col justify-between items-center">
          <h1 className="text-[56px] font-bold leading-[67.2px] text-center">Courses</h1>
          <p className="text-[18px] font-normal leading-[27px] text-center">Your Ultimate Guide to learning</p>
        </div>
        <div className="h-[1340px] w-full flex flex-col justify-between items-center">
          <div className="h-[40px] w-[29.2%] flex">
            <div className="w-[25.9%] h-full border-b border-[#676767]">
              <p className="text-[16px] font-normal leading-[24px] text-center">Popular</p>
            </div>
            <div className="w-[41.66%] h-full">
              <p className="text-[16px] font-normal leading-[24px] text-center">Recommended</p>
            </div>
            <div className="w-[32.44%] h-full">
              <p className="text-[16px] font-normal leading-[24px] text-center">Best Price</p>
            </div>
          </div>
          <div className="h-[534px] w-full flex justify-around items-center">
            <div className="w-[32%] max-w-[416px] h-full bg-[#F7F7F7] flex flex-col justify-between ">
              <Image src={'/images/courses/course-1.svg'} height={300} width={400} alt="image" className="w-full"></Image>
              <div className="h-[210px] w-[91.8%] flex flex-col gap-[24px] mx-auto">
                <div className="h-[24px] w-full flex justify-between items-center">
                  <div className="w-[85.3%]"><p className="text-[14px] font-semibold leading-[21px] text-left">Design</p></div>
                  <div className="w-[12.5%] flex items-center justify-center">
                    <Image src={'images/star.svg'} width={24} height={24} alt="star"></Image>
                    <div className="w-1/2"><p className="text-[15px] font-semibold leading-[21px] text-right">5.0</p></div>
                  </div>
                </div>
                <div className="w-full">
                  <h5 className=" text-[24px] font-bold leading-[33.6px] text-left ">UX/UI Design 201</h5>
                  <p className=" text-[16px] font-normal leading-[24px] text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="h-[40px] flex gap-[16px] items-center">
                  <button className="w-[117px] h-full text-[16px] font-normal leading-[24px] text-center border border-black rounded-[5px]">Enroll Now</button>
                  <span className="w-[77px] h-full text-[16px] font-medium leading-[24px] flex justify-center items-center">$400</span>
                </div>
              </div>
            </div>
            <div className="w-[32%] max-w-[416px] h-full bg-[#F7F7F7] flex flex-col justify-between ">
              <Image src={'/images/courses/course-2.svg'} height={300} width={400} alt="image" className="w-full"></Image>
              <div className="h-[210px] w-[91.8%] flex flex-col gap-[24px] mx-auto">
                <div className="h-[24px] w-full flex justify-between items-center">
                  <div className="w-[85.3%]"><p className="text-[14px] font-semibold leading-[21px] text-left">Programmimg</p></div>
                  <div className="w-[12.5%] flex items-center justify-center">
                    <Image src={'images/star.svg'} width={24} height={24} alt="star"></Image>
                    <div className="w-1/2"><p className="text-[15px] font-semibold leading-[21px] text-right">5.0</p></div>
                  </div>
                </div>
                <div className="w-full">
                  <h5 className=" text-[24px] font-bold leading-[33.6px] text-left ">Introduction to Python</h5>
                  <p className=" text-[16px] font-normal leading-[24px] text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="h-[40px] flex gap-[16px] items-center">
                  <button className="w-[117px] h-full text-[16px] font-normal leading-[24px] text-center border border-black rounded-[5px]">Enroll Now</button>
                  <span className="w-[77px] h-full text-[16px] font-medium leading-[24px] flex justify-center items-center">$400</span>
                </div>
              </div>
            </div>
            <div className="w-[32%] max-w-[416px] h-full bg-[#F7F7F7] flex flex-col justify-between ">
              <Image src={'/images/courses/course-3.svg'} height={300} width={400} alt="image" className="w-full"></Image>
              <div className="h-[210px] w-[91.8%] flex flex-col gap-[24px] mx-auto">
                <div className="h-[24px] w-full flex justify-between items-center">
                  <div className="w-[85.3%]"><p className="text-[14px] font-semibold leading-[21px] text-left">Business</p></div>
                  <div className="w-[12.5%] flex items-center justify-center">
                    <Image src={'images/star.svg'} width={24} height={24} alt="star"></Image>
                    <div className="w-1/2"><p className="text-[15px] font-semibold leading-[21px] text-right">5.0</p></div>
                  </div>
                </div>
                <div className="w-full">
                  <h5 className=" text-[24px] font-bold leading-[33.6px] text-left ">Data Analysis for Beginners</h5>
                  <p className=" text-[16px] font-normal leading-[24px] text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="h-[40px] flex gap-[16px] items-center">
                  <button className="w-[117px] h-full text-[16px] font-normal leading-[24px] text-center border border-black rounded-[5px]">Enroll Now</button>
                  <span className="w-[77px] h-full text-[16px] font-medium leading-[24px] flex justify-center items-center">$400</span>
                </div>
              </div>
            </div>
            </div>
          <div className="h-[534px] w-full flex justify-around ite">
            <div className="w-[32%] max-w-[416px] h-full bg-[#F7F7F7] flex flex-col justify-between ">
              <Image src={'/images/courses/course-4.svg'} height={300} width={400} alt="image" className="w-full"></Image>
              <div className="h-[210px] w-[91.8%] flex flex-col gap-[24px] mx-auto">
                <div className="h-[24px] w-full flex justify-between items-center">
                  <div className="w-[85.3%]"><p className="text-[14px] font-semibold leading-[21px] text-left">Art</p></div>
                  <div className="w-[12.5%] flex items-center justify-center">
                    <Image src={'images/star.svg'} width={24} height={24} alt="star"></Image>
                    <div className="w-1/2"><p className="text-[15px] font-semibold leading-[21px] text-right">5.0</p></div>
                  </div>
                </div>
                <div className="w-full">
                  <h5 className=" text-[24px] font-bold leading-[33.6px] text-left ">Art Specialization</h5>
                  <p className=" text-[16px] font-normal leading-[24px] text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="h-[40px] flex gap-[16px] items-center">
                  <button className="w-[117px] h-full text-[16px] font-normal leading-[24px] text-center border border-black rounded-[5px]">Enroll Now</button>
                  <span className="w-[77px] h-full text-[16px] font-medium leading-[24px] flex justify-center items-center">$400</span>
                </div>
              </div>
            </div>
            <div className="w-[32%] max-w-[416px] h-full bg-[#F7F7F7] flex flex-col justify-between ">
              <Image src={'/images/courses/course-5.svg'} height={300} width={400} alt="image" className="w-full"></Image>
              <div className="h-[210px] w-[91.8%] flex flex-col gap-[24px] mx-auto">
                <div className="h-[24px] w-full flex justify-between items-center">
                  <div className="w-[85.3%]"><p className="text-[14px] font-semibold leading-[21px] text-left">Law</p></div>
                  <div className="w-[12.5%] flex items-center justify-center">
                    <Image src={'images/star.svg'} width={24} height={24} alt="star"></Image>
                    <div className="w-1/2"><p className="text-[15px] font-semibold leading-[21px] text-right">5.0</p></div>
                  </div>
                </div>
                <div className="w-full">
                  <h5 className=" text-[24px] font-bold leading-[33.6px] text-left ">Rule of Law</h5>
                  <p className=" text-[16px] font-normal leading-[24px] text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="h-[40px] flex gap-[16px] items-center">
                  <button className="w-[117px] h-full text-[16px] font-normal leading-[24px] text-center border border-black rounded-[5px]">Enroll Now</button>
                  <span className="w-[77px] h-full text-[16px] font-medium leading-[24px] flex justify-center items-center">$400</span>
                </div>
              </div>
            </div>
            <div className="w-[32%] max-w-[416px] h-full bg-[#F7F7F7] flex flex-col justify-between ">
              <Image src={'/images/courses/course-6.svg'} height={300} width={400} alt="image" className="w-full"></Image>
              <div className="h-[210px] w-[91.8%] flex flex-col gap-[24px] mx-auto">
                <div className="h-[24px] w-full flex justify-between items-center">
                  <div className="w-[85.3%]"><p className="text-[14px] font-semibold leading-[21px] text-left">Tech</p></div>
                  <div className="w-[12.5%] flex items-center justify-center">
                    <Image src={'images/star.svg'} width={24} height={24} alt="star"></Image>
                    <div className="w-1/2"><p className="text-[15px] font-semibold leading-[21px] text-right">5.0</p></div>
                  </div>
                </div>
                <div className="w-full">
                  <h5 className=" text-[24px] font-bold leading-[33.6px] text-left ">Introduction to webflow</h5>
                  <p className=" text-[16px] font-normal leading-[24px] text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="h-[40px] flex gap-[16px] items-center">
                  <button className="w-[117px] h-full text-[16px] font-normal leading-[24px] text-center border border-black rounded-[5px]">Enroll Now</button>
                  <span className="w-[77px] h-full text-[16px] font-medium leading-[24px] flex justify-center items-center">$400</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-[152px] h-[40px] border border-black rounded-[5px]  text-[16px] font-normal leading-[24px] text-center">View All Courses</button>
        </div>
      </div>
      
    </section>
  )
}