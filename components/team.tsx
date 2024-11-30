import Image from "next/image"
export default function Team(){
  return(
    <section>
      <div className="h-[895px] bg-[#F7F7F7] w-full flex flex-col justify-center gap-[80px] items-center">
      <div className="h-[109px] w-[60%] flex flex-col justify-between items-center">
        <h2 className="text-[48px] font-bold leading-[57.6px] text-center">Our team</h2>
        <p className="text-[18px] font-normal leading-[27px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="h-[482px] w-full flex flex-col justify-between items-center ">
        <div className="h-[209px] w-full flex justify-around items-center">
          <div className="w-[30.83%] max-w-[394.67px] h-full flex flex-col justify-between items-center">
            <Image src={'/images/people/person-1.svg'} alt="person-image" height={80} width={80}></Image>
            <div className="h-[121px] w-full">
            <div className="h-[57px] w-full flex flex-col justify-between">
              <p className="text-[20px] font-semibold leading-[30px] text-center">James Nduku</p>
              <p className=" text-[18px] font-normal leading-[27px] text-center">Marketing Coordinator</p>
            </div>
            </div>
            <div className="h-6 w-[100px] flex justify-between items-center">
              <Image src={'/images/Linkedin.svg'} alt="linkedin" height={24} width={24}></Image>
              <Image src={'/images/Twitter.svg'} alt="Twitter" height={24} width={24}></Image>
              <Image src={'/images/Dribble.svg'} alt="Dribble" height={24} width={24}></Image>
            </div>
          </div>
          <div className="w-[30.83%] max-w-[394.67px] h-full flex flex-col justify-between items-center">
            <Image src={'/images/people/person-2.svg'} alt="person-image" height={80} width={80}></Image>
            <div className="h-[121px] w-full">
            <div className="h-[57px] w-full flex flex-col justify-between">
              <p className="text-[20px] font-semibold leading-[30px] text-center">Joseph Munyambu</p>
              <p className=" text-[18px] font-normal leading-[27px] text-center">Nursing Assistant</p>
            </div>
            </div>
            <div className="h-6 w-[100px] flex justify-between items-center">
              <Image src={'/images/Linkedin.svg'} alt="linkedin" height={24} width={24}></Image>
              <Image src={'/images/Twitter.svg'} alt="Twitter" height={24} width={24}></Image>
              <Image src={'/images/Dribble.svg'} alt="Dribble" height={24} width={24}></Image>
            </div>
          </div>
          <div className="w-[30.83%] max-w-[394.67px] h-full flex flex-col justify-between items-center">
            <Image src={'/images/people/person-3.svg'} alt="person-image" height={80} width={80}></Image>
            <div className="h-[121px] w-full">
            <div className="h-[57px] w-full flex flex-col justify-between">
              <p className="text-[20px] font-semibold leading-[30px] text-center">Joseph Ngumbau</p>
              <p className=" text-[18px] font-normal leading-[27px] text-center">Medical Assistant</p>
            </div>
            </div>
            <div className="h-6 w-[100px] flex justify-between items-center">
              <Image src={'/images/Linkedin.svg'} alt="linkedin" height={24} width={24}></Image>
              <Image src={'/images/Twitter.svg'} alt="Twitter" height={24} width={24}></Image>
              <Image src={'/images/Dribble.svg'} alt="Dribble" height={24} width={24}></Image>
            </div>
          </div>
        </div>
        <div className="h-[209px] w-full flex justify-around items-center">
          <div className="w-[30.83%] max-w-[394.67px] h-full flex flex-col justify-between items-center">
            <Image src={'/images/people/person-4.svg'} alt="person-image" height={80} width={80}></Image>
            <div className="h-[121px] w-full">
            <div className="h-[57px] w-full flex flex-col justify-between">
              <p className="text-[20px] font-semibold leading-[30px] text-center">Erick Kipkemboi</p>
              <p className=" text-[18px] font-normal leading-[27px] text-center">Web Designer</p>
            </div>
            </div>
            <div className="h-6 w-[100px] flex justify-between items-center">
              <Image src={'/images/Linkedin.svg'} alt="linkedin" height={24} width={24}></Image>
              <Image src={'/images/Twitter.svg'} alt="Twitter" height={24} width={24}></Image>
              <Image src={'/images/Dribble.svg'} alt="Dribble" height={24} width={24}></Image>
            </div>
          </div>
          <div className="w-[30.83%] max-w-[394.67px] h-full flex flex-col justify-between items-center">
            <Image src={'/images/people/person-5.svg'} alt="person-image" height={80} width={80}></Image>
            <div className="h-[121px] w-full">
            <div className="h-[57px] w-full flex flex-col justify-between">
              <p className="text-[20px] font-semibold leading-[30px] text-center">Stephen Kerubo</p>
              <p className=" text-[18px] font-normal leading-[27px] text-center">President of Sales</p>
            </div>
            </div>
            <div className="h-6 w-[100px] flex justify-between items-center">
              <Image src={'/images/Linkedin.svg'} alt="linkedin" height={24} width={24}></Image>
              <Image src={'/images/Twitter.svg'} alt="Twitter" height={24} width={24}></Image>
              <Image src={'/images/Dribble.svg'} alt="Dribble" height={24} width={24}></Image>
            </div>
          </div>
          <div className="w-[30.83%] max-w-[394.67px] h-full flex flex-col justify-between items-center">
            <Image src={'/images/people/person-6.svg'} alt="person-image" height={80} width={80}></Image>
            <div className="h-[121px] w-full">
            <div className="h-[57px] w-full flex flex-col justify-between">
              <p className="text-[20px] font-semibold leading-[30px] text-center">John Leboo</p>
              <p className=" text-[18px] font-normal leading-[27px] text-center">Dog Trainer</p>
            </div>
            </div>
            <div className="h-6 w-[100px] flex justify-between items-center">
              <Image src={'/images/Linkedin.svg'} alt="linkedin" height={24} width={24}></Image>
              <Image src={'/images/Twitter.svg'} alt="Twitter" height={24} width={24}></Image>
              <Image src={'/images/Dribble.svg'} alt="Dribble" height={24} width={24}></Image>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}