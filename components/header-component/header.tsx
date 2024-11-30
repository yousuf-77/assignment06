import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header>
    <nav className="w-full ">
      <div
        className="bg-[#F7F7F7] w-full h-[54px] flex justify-center
      items-center shadow-[inset_0px_-1px_0px_0px_#000000]"
      >
        <div className=" w-[90.15625%] h-[54px] flex items-center justify-between">
          <div className="h-[30px] w-[386px] flex items-center justify-between ">
            <p className="font-roboto text-sm font-normal leading-[21px] ">
              Phone Number: 956 742 455 678
            </p>
            <div className="border border-[#676767] h-[30px]"></div>
            <div className="font-roboto text-sm font-normal leading-[21px]">
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
      <div className="w-full h-[72px] mt-[16px] border-b border-t-0 border-l-0 border-r-0 bg-[#F7F7F7] flex items-center justify-around border-b-[#676767]">
        <div className="h-[44px] w-[90%] flex items-center justify-between">
          <Image
            src={"/images/Ddsgnr-logo.svg"}
            height={41}
            width={130}
            alt="logo"
          ></Image>
          <div className="w-[78.993%] min-w-[660px] h-[44px] flex items-center justify-between bg-white ">
            <div className="w-[64px] h-[44px] flex justify-center items-center border-t-0 border-l-0 border-r-0 border-b border-b-[#000000]">
              <Link
                className="font-roboto text-base font-normal  text-left"
                href={"./"}
              >
                Home
              </Link>
            </div>
            <Link
              className="font-roboto text-base font-normal  text-left"
              href={"./"}
            >
              Courses
            </Link>
            <Link
              className="font-roboto text-base font-normal  text-left"
              href={"./"}
            >
              Services
            </Link>
            <Link
              className="font-roboto text-base font-normal  text-left"
              href={"./"}
            >
              Achievement
            </Link>
            <Link
              className="font-roboto text-base font-normal  text-left"
              href={"./"}
            >
              About Us
            </Link>
            <Link
              className="font-roboto text-base font-normal  text-left"
              href={"./"}
            >
              Testimonial
            </Link>
            <div className="w-[191px] h-[40px] flex justify-between items-center">
              <button className="w-[80px] h-[40px] p-[8px_20px] border border-[#000000] rounded-[5px] font-roboto text-[16px] font-normal leading-[24px] text-left ">
                Login
              </button>
              <button className="w-[95px] h-[40px]  py-[8px] rounded-[5px]  border border-black bg-black font-roboto text-[16px] font-normal leading-[24px]  text-white text-center">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
}
