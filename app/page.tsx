import Image from "next/image";
import CoursesCategory from "@/components/courses-category";
import Achievement from "@/components/achievement";
import Courses from "@/components/courses";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
export default function HomePage() {
  return (
    <main>
      <section>
        <div className=" h-[780px] flex-col lg:h-fit flex lg:flex-row lg:items-center
        
        md:h-fit md:flex-row md:items-center
        
        ">
          <div className=" h-[390px] w-full lg:h-[100%] lg:w-1/2 flex justify-center items-center
          
          md:h-[100%] md:w-1/2

          ">
            <div className=" w-[100%] justify-between items-center h-[300px] md:h-[350px] lg:h-[300px] flex flex-col lg:justify-between lg:items-center
            
            md:justify-between md:items-center

            ">
              <div className=" w-[88.78%] h-[200px] lg:h-[212px] lg:w-[500px] flex flex-col justify-around lg:justify-between items-start
              
              md:h-[300px] 

              ">
                <h1 className=" text-[40px] leading-[48px] lg:text-[56px] font-bold lg:leading-[67.2px] text-left
                
                md:text-[48px] md:leading-[58.2px]

                ">
                  Learn new skills online with ease
                </h1>
                <h3 className="text-[18px] font-normal leading-[27px] text-left">
                  Discover a wide range of courses covering a variety of
                  subjects, taught by expert instructors.
                </h3>
              </div>
              <div className=" w-[88.78%] lg:w-[500px] lg:flex lg:justify-start 

               md:flex md:justify-start

              ">
              <div className="  h-[64px] gap-4 justify-start lg:w-[358px] lg:h-[64px] flex lg:justify-between items-center
              
              md:w-[358px] md:h-[64px] md:justify-between

              ">
                <button className=" md:w-[168px] lg:w-[178px] w-[178px] h-[48px] text-center gap-[8px] rounded-[5px] bg-black text-white border">
                  Start learning now
                </button>
                <button className="md:[154px] lg:w-[164px] w-[164px] h-[48px]  gap-[8px] rounded-[5px] border-solid border-black border ">
                  Explore Courses
                </button>
              </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 lg:w-[50%] lg:h-[100%] bg-[url('/images/girl-image.svg')] bg- bg-cover bg-no-repeat bg-top
          
          md:w-[50%] md:h-[100%]
          
          ">
            <Image
              src={"/images/girl-image.svg"}
              alt="girl-image"
              height={800}
              width={640}
              className="w-[100%] hidden 
              
              lg:block md:block"
            ></Image>
          </div>
        </div>
        <div className="h-[239.34px] pl-[24px] justify-center gap-6 lg:h-[228px] lg:bg-[#F7F7F7] flex-col flex lg:flex-row lg:justify-around lg:items-center 
        
        md:h-[228px]
md:bg-[#F7F7F7]
md:flex-row
md:justify-around
md:items-center
        ">
          <p className="w-[300px] text-[18px]  lg:text-[24px] font-bold leading-[33.6px] text-left
          
          md:text-[24px]
          ">
            Trusted by 2000+ companies worldwide.
          </p>
          <div className=" h-[65.34px] overflow-x-hidden gap-3 lg:w-[68.75%] lg:h-[56px] flex lg:justify-between
          
          md:w-[68.75%]
md:h-[56px]
md:justify-between
          ">
            <Image
              src={"/images/company-logo/company-1.svg"}
              alt="company-image"
              height={38.52}
              width={123.8}
            ></Image>
            <Image
              src={"/images/company-logo/company-2.svg"}
              alt="company-image"
              height={38.52}
              width={123.8}
            ></Image>
            <Image
              src={"/images/company-logo/company-3.svg"}
              alt="company-image"
              height={38.52}
              width={123.8}
            ></Image>
            <Image
              src={"/images/company-logo/company-4.svg"}
              alt="company-image"
              height={38.52}
              width={123.8}
            ></Image>
            <Image
              src={"/images/company-logo/company-5.svg"}
              alt="company-image"
              height={38.52}
              width={123.8}
            ></Image>
            <Image
              src={"/images/company-logo/company-6.svg"}
              alt="company-image"
              height={38.52}
              width={123.8}
            ></Image>
          </div>
        </div>
      </section>
      <CoursesCategory></CoursesCategory>
       <Achievement></Achievement>
      <Courses></Courses>
      <Team></Team>
      <Testimonial></Testimonial>
      <Footer></Footer> 
    </main>
  );
}
