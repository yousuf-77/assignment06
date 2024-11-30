import Image from "next/image"
export default function Footer(){
  return(
    <footer>
      <div className="h-[684px] flex justify-center items-center">
        <div className="w-[87.5%] h-[524px] flex flex-col justify-between items-center ">
          <div className="h-[82px] w-full flex justify-between ">
            <div className="h-[51px] w-[44.64%] flex flex-col justify-between">
              <p className="text-[18px] font-semibold leading-[27px] text-left">Subscribe to our newsletter</p>
              <p className="text-[16px] font-normal leading-[24px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-[35.714%] max-w-[400px] h-full flex flex-col justify-between">
              <div className="w-full h-[48px] flex justify-between items-center">
                <input type="email" name="email" id="email" placeholder="Enter your email" className="w-[265px] h-auto p-[12px] gap-[8px] rounded-[5px] border border-black placeholder-[#505050] "/>
                <button className="w-[119px] h-full rounded-[5px] border border-black text-center text-[16px] font-normal leading-[24px] ">Subscribe</button>
              </div>
              <p className="text-[12px] font-normal leading-[18px] text-left">By subscribing you agree to with our <span className="text-[12px] font-normal leading-[18px] text-left underline underline-solid"> Privacy Policy </span></p>
            </div>
          </div>
          <div className="h-[225px] w-full flex justify-between">
            <div className="w-[22.32%] max-w-[250px] h-[40px]">
              <Image src={'/images/Ddsgnr-logo.svg'} alt="logo" height={40} width={130.6}></Image>
            </div>
            <div className="w-[22.32%] max-w-[250px] h-full flex flex-col justify-between">
              <p className="text-[16px] font-semibold leading-[24px] text-left">Courses</p>
              <div className="w-full h-[185px] flex flex-col justify-around">
                <p className=" text-[14px] font-normal leading-[21px] text-left">Business</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Development</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Technology</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Design</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Programming</p>
              </div>
            </div>
            <div className="w-[22.32%] max-w-[250px] h-full flex flex-col justify-between">
              <p className="text-[16px] font-semibold leading-[24px] text-left">Resources</p>
              <div className="w-full h-[185px] flex flex-col justify-around">
                <p className=" text-[14px] font-normal leading-[21px] text-left">Career</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Resume</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Learning</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Interview Preparation</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Jobs</p>
              </div>
            </div>
            <div className="w-[22.32%] max-w-[250px] h-full flex flex-col justify-between">
              <p className="text-[16px] font-semibold leading-[24px] text-left">About Us</p>
              <div className="w-full h-[185px] flex flex-col justify-around">
                <p className=" text-[14px] font-normal leading-[21px] text-left">Contact</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Help/Support</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">FAQ</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Terms and Conditions</p>
                <p className=" text-[14px] font-normal leading-[21px] text-left">Partners</p>
              </div>
            </div>
          </div>
          <div className="h-[57px] w-full border-t border-t-black flex justify-center items-end">
            <div className="h-[24px] w-full flex justify-between items-center">
              <div className="w-[50.357%] max-w-[564px] h-full flex justify-between items-center">
                <p className="text-[14px] font-normal leading-[21px] text-left">2023 Ddsgnr. All right reserved.</p>
                <span className="text-[14px] font-normal leading-[21px] text-left underline decoration-solid">Privacy Policy</span>
                <span className="text-[14px] font-normal leading-[21px] text-left underline decoration-solid">Terms of Service</span>
                <span className="text-[14px] font-normal leading-[21px] text-left underline decoration-solid">Cookies Settings</span>
              </div>
              <div className="w-[132px] h-full flex justify-between items-center">
                <Image src={'/images/icon/facebook.svg'} alt="facebook" height={24} width={24}/>
                <Image src={'/images/icon/instagram.svg'} alt="instagram" height={24} width={24}/>
                <Image src={'/images/icon/twitter.svg'} alt="twitter" height={24} width={24}/>
                <Image src={'/images/icon/linkedin.svg'} alt="linkedin" height={24} width={24}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
