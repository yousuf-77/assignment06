import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="h-[1411px] xs:h-[684px] flex justify-center items-center">
        <div className="w-[87.5%] h-[94%] xs:h-[77%] flex flex-col xs:justify-between justify-around items-center xs:items-center ">
          <div className="h-[261px] flex-col  xs:h-[82px] w-full xs:flex-row flex justify-between  items-center ">
            <div className="h-[91px] xs:h-[51px] w-full xs:w-[44.64%] flex flex-col justify-around xs:items-start items-center xs:justify-between">
              <p className="text-[18px] font-semibold leading-[27px] text-left">
                Subscribe to our newsletter
              </p>
              <p className="text-[16px] font-normal leading-[24px] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full xs:w-[35.714%] max-w-[400px] md:min-w-[390px] md:h-full h-[146px] flex flex-col justify-between gap-1">
              <div className="w-full h-[112px] md:h-[48px] md:flex-row flex-col flex justify-between items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full md:w-[265px] h-auto p-[12px] gap-[8px] rounded-[5px] border border-black placeholder-[#505050] "
                />
                <button className="w-full md:w-[119px] md:h-full` py-[12px] rounded-[5px] border border-black text-center text-[16px] font-normal leading-[24px] ">
                  Subscribe
                </button>
              </div>
              <p className="text-[12px] font-normal leading-[18px] text-center xs:text-left">
                By subscribing you agree to with our{" "}
                <span className="text-[12px] font-normal leading-[18px] text-left underline underline-solid">
                  {" "}
                  Privacy Policy{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="h-[811px] xs:h-[225px] w-[172px] xs:w-full flex justify-between xs:flex-row flex-col">
            <div className="xs:w-[22.32%] max-w-[250px] h-[40px]">
              <Image
                src={"/images/Ddsgnr-logo.svg"}
                alt="logo"
                height={40}
                width={130.6}
              ></Image>
            </div>
            <div className="xs:w-[22.32%] max-w-[250px] h-[225px] xs:h-full flex flex-col justify-between  xs:items-start items-center">
              <p className="text-[16px] font-semibold leading-[24px] text-left">
                Courses
              </p>
              <div className="w-full h-[185px] flex flex-col justify-around xs:items-start items-center">
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Business
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Development
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Technology
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Design
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Programming
                </p>
              </div>
            </div>
            <div className="xs:w-[22.32%] max-w-[250px] h-[225px] xs:h-full flex flex-col justify-between xs:items-start items-center">
              <p className="text-[16px] font-semibold leading-[24px] text-left">
                Resources
              </p>
              <div className="w-full h-[185px] flex flex-col justify-around xs:items-start items-center">
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Career
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Resume
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Learning
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Interview Preparation
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Jobs
                </p>
              </div>
            </div>
            <div className="xs:w-[22.32%] max-w-[250px] h-[225px] xs:h-full flex flex-col justify-between xs:items-start items-center">
              <p className="text-[16px] font-semibold leading-[24px] text-left">
                About Us
              </p>
              <div className="w-full h-[185px] flex flex-col justify-around xs:items-start items-center">
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Contact
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Help/Support
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  FAQ
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Terms and Conditions
                </p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">
                  Partners
                </p>
              </div>
            </div>
          </div>
          <div className="h-[147px] xs:h-[57px] w-full border-t border-t-black flex justify-center items-end">
            <div className="h-[114px] xs:h-[24px] w-full flex justify-between items-center xs:flex-row flex-col">
              <div className="w-full xs:w-[50.357%] max-w-[564px] md:min-w-[524px] h-full flex justify-around xs:justify-between items-center xs:min-w-[307px]  flex-wrap">
                <p className=" w-full md:w-auto text-[14px] font-normal leading-[21px] text-center xs:text-left">
                  2023 Ddsgnr. All right reserved.
                </p>
                <span className="text-[14px] font-normal leading-[21px] text-left underline decoration-solid">
                  Privacy Policy
                </span>
                <span className="text-[14px] font-normal leading-[21px] text-left underline decoration-solid">
                  Terms of Service
                </span>
                <span className="text-[14px] font-normal leading-[21px] text-left underline decoration-solid">
                  Cookies Settings
                </span>
              </div>
              <div className="w-[132px] h-6 xs:h-full flex justify-between items-center">
                <Image
                  src={"/images/icon/facebook.svg"}
                  alt="facebook"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/images/icon/instagram.svg"}
                  alt="instagram"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/images/icon/twitter.svg"}
                  alt="twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/images/icon/linkedin.svg"}
                  alt="linkedin"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
