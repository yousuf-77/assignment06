import Image from "next/image"
export default function Testimonial(){
  return(
    <section>
      <div className="h-[830.89px] flex bg-[#F7F7F7]  flex-col gap-[80px] justify-center pl-[64px]">
        <div className="w-[43.75%] flex flex-col justify-between h-[109px]">
          <h2 className="text-[48px] font-bold leading-[57.6px] text-lef">Customer testimonials</h2>
          <p className="text-[18px] font-normal leading-[27px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-[90%] h-[321.89px] flex justify-between items-center ">
            <div className="w-[31.48%] max-w-[416px] h-full flex justify-center items-center border border-black">
              <div className="w-[85%] h-[85%] flex flex-col justify-between ">
              <div className="w-[116px] h-[18.89px] flex justify-between">
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
              </div>
              <p className="w-[84.85%] text-[18px] font-normal leading-[27px] text-left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              <div className="w-[254px] h-[56px] flex justify-between items-center">
                <Image src={'/images/people/person-3.svg'} alt="image" height={56} width={56} className="rounded-[50%]"/>
                <div className="w-[70%] h-full flex flex-col justify-between pl-2">
              <p className="text-[16px] font-semibold leading-[24px] text-left">James Nduku</p>
              <p className="text-[16px] font-normal leading-[24px] text-left">Software Developer</p>
                </div>
                <div></div>
              </div>
              </div>
            </div>
            <div className="w-[31.48%] max-w-[416px] h-full flex justify-center items-center border border-black">
              <div className="w-[85%] h-[85%] flex flex-col justify-between ">
              <div className="w-[116px] h-[18.89px] flex justify-between">
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
              </div>
              <p className="w-[84.85%] text-[18px] font-normal leading-[27px] text-left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              <div className="w-[254px] h-[56px] flex justify-between items-center">
                <Image src={'/images/people/person-1.svg'} alt="image" height={56} width={56} className="rounded-[50%]"/>
                <div className="w-[70%] h-full flex flex-col justify-between pl-2">
              <p className="text-[16px] font-semibold leading-[24px] text-left">Erick Kipkemboi</p>
              <p className="text-[16px] font-normal leading-[24px] text-left">Scrum Master</p>
                </div>
                <div></div>
              </div>
              </div>
            </div>
            <div className="w-[31.48%] max-w-[416px] h-full flex justify-center items-center border border-black">
              <div className="w-[85%] h-[85%] flex flex-col justify-between ">
              <div className="w-[116px] h-[18.89px] flex justify-between">
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
                <Image src={'/images/black-star.svg'} alt="star" height={18.89} width={20}></Image>
              </div>
              <p className="w-[84.85%] text-[18px] font-normal leading-[27px] text-left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              <div className="w-[254px] h-[56px] flex justify-between items-center">
                <Image src={'/images/people/person-6.svg'} alt="image" height={56} width={56} className="rounded-[50%]"/>
                <div className="w-[70%] h-full flex flex-col justify-between pl-2">
              <p className="text-[16px] font-semibold leading-[24px] text-left">Stephen Kerubo</p>
              <p className="text-[16px] font-normal leading-[24px] text-left">UI/UX Designer</p>
                </div>
                <div></div>
              </div>
              </div>
            </div>
        </div>
        <div className=" w-[90%] flex items-center justify-between">
          <div className="w-[72px] h-[8px] flex justify-between items-center">
            <div className="w-[8px] h-[8px] bg-black rounded-[50%]"></div>
            <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
            <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
            <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
            <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
          </div>
        <div className="w-[111px] h-[48px] flex justify-between items-center">
        <button className="w-[48px] h-[48px] rounded-[50%] border border-black flex items-center justify-center"><Image src={'images/left-arrow.svg'} alt="arrow" height={24} width={24}/></button>
        <button className="w-[48px] h-[48px] rounded-[50%] border border-black flex items-center justify-center"><Image src={'images/right-arrow.svg'} alt="arrow" height={24} width={24}/></button>
        </div>
        </div>
      </div>
    </section>
  )
}