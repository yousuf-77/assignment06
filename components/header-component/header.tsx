import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header>
    <nav className="w-full ">
      <div
        className="hidden 

      md:bg-[#F7F7F7]

      md:w-full
      md:h-[54px]
      md:flex
      md:justify-center
      md:items-center
      md:shadow-[inset_0px_-1px_0px_0px_#000000]
    "
      >
        <div className=" w-[90.15625%] h-[54px] flex items-center justify-between">
          <div className="h-[30px] md:w-[330px] lg:w-[386px] flex items-center justify-between ">
            <p className="font-roboto md:text-xs lg:text-sm font-normal leading-[21px] ">
              Phone Number: 956 742 455 678
            </p>
            <div className="border border-[#676767] h-[30px]"></div>
            <div className="font-roboto md:text-xs lg:text-sm font-normal leading-[21px]">
              Email:info@ddsgnr.com
            </div>
          </div>

          <div className="w-[132px] h-[24px] gap-[12px] flex items-center ">
            <Image
              src={"images/Icon/facebook.svg"}
              alt="facebook-icon"
              height={24}
              width={24}
            ></Image>
            <Image
              src={"images/Icon/instagram.svg"}
              alt="instagram-icon"
              height={24}
              width={24}
            ></Image>
            <Image
              src={"images/Icon/twitter.svg"}
              alt="twitter-icon"
              height={24}
              width={24}
            ></Image>
            <Image
              src={"images/Icon/linkedin.svg"}
              alt="linkedin-icon"
              height={24}
              width={24}
            ></Image>
          </div>
        </div>
      </div>
      <div className=" bg-white border-b border-b-[#676767] m-0 w-full h-[72px] lg:mt-[16px] lg:border-b lg:border-t-0 lg:border-l-0 lg:border-r-0 md:bg-[#F7F7F7] flex items-center justify-around lg:border-b-[#676767]">
        <div className=" h-[48px] w-[88.78%] lg:h-[44px] md:w-[94%] lg:w-[90%] flex items-center justify-between">
          <Image
            src={"/images/Ddsgnr-logo.svg"}
            height={41}
            width={130}
            alt="logo"
          ></Image>
          <div className="  hidden md:w-[80%] lg:w-[78.993%]  lg:min-w-[660px]  lg:h-[44px]  md:flex  md:items-center  md:justify-between md:bg-white ">
            
              <button className="p-[10px] border-b border-b-[#000000]">
              <Link
                className=" md:text-sm lg:text-base font-normal  text-left"
                href={"./"}
              >
                Home
              </Link>
              </button>
            
            <Link
              className=" md:text-sm lg:text-base font-normal  text-left"
              href={"./"}
            >
              Courses
            </Link>
            <Link
              className=" md:text-sm lg:text-base font-normal  text-left"
              href={"./"}
            >
              Services
            </Link>
            <Link
              className=" md:text-sm lg:text-base font-normal  text-left"
              href={"./"}
            >
              Achievement
            </Link>
            <Link
              className=" md:text-sm lg:text-base font-normal  text-left"
              href={"./"}
            >
              About Us
            </Link>
            <Link
              className=" md:text-sm lg:text-base font-normal  text-left"
              href={"./"}
            >
              Testimonial
            </Link>
            <div className=" md:w-[150px] lg:w-[191px] h-[40px] flex justify-between items-center">
              <button className=" md:p-[6px_14px] lg:p-[8px_20px] border border-[#000000] rounded-[5px] md:text-sm  lg:text-base font-normal   ">
                Login
              </button>
              <button className=" md:p-[6px_14px] lg:p-[8px_20px] rounded-[5px]  border border-black bg-black md:text-sm lg:text-base font-normal  text-white text-center">
                Sign Up
              </button>
            </div>
          </div>
          <div className="md:hidden w-[48px] h-[48px] flex justify-center items-center">
          <Image src={'/images/Menu.svg'} alt="menu" height={24} width={24}/></div>
        </div>
      </div>
    </nav>
    </header>
  );
}
