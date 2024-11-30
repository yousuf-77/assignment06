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
        <div className=" h-fit flex items-center">
          <div className="h-[100%] w-1/2 flex justify-center items-center">
            <div className="h-[300px] flex flex-col justify-between">
              <div className="h-[212px] w-[500px] flex flex-col justify-between">
                <h1 className="text-[56px] font-bold leading-[67.2px] text-left">
                  Learn new skills online with ease
                </h1>
                <h3 className="text-[18px] font-normal leading-[27px] text-left">
                  Discover a wide range of courses covering a variety of
                  subjects, taught by expert instructors.
                </h3>
              </div>
              <div className="w-[358px] h-[64px] flex justify-between items-center">
                <button className="w-[178px] h-[48px] text-center gap-[8px] rounded-[5px] bg-black text-white border">
                  Start learning now
                </button>
                <button className="w-[164px] h-[48px]  gap-[8px] rounded-[5px] border-solid border-black border ">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[100%] ">
            <Image
              src={"/images/girl-image.svg"}
              alt="girl-image"
              height={800}
              width={640}
              className="w-[100%] "
            ></Image>
          </div>
        </div>
        <div className="h-[228px] bg-[#F7F7F7] flex justify-around items-center">
          <p className="w-[320px] text-[24px] font-bold leading-[33.6px] text-left">
            Trusted by 2000+ companies worldwide.
          </p>
          <div className="w-[68.75%] h-[56px] flex justify-between">
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
