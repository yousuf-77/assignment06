export default function Achievement(){
  return(

<section>
        <div className="h-[488px] flex justify-center items-center">
          <div className=" h-[355px] md:h-[300px] lg:h-[264px] w-[90%] flex flex-col items center justify-between">
            <h1 className="text-[32px] md:text-[48px] font-bold leading-[57.6px] text-center">Our Achievements</h1>
            <p className=" hidden md:block text-[18px] font-normal leading-[27px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <p className=" md:hidden text-[18px] font-normal leading-[27px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>

            <div className="h-[176px] md:h-[96px] flex flex-col md:flex-row justify-between items-center">
              <div className="w-[90%] md:w-[48%] h-[100%] flex items-center justify-between">
                <div className="w-[48%] h-[60px] md:h-[80px] flex flex-col align-center justify-between">
                  <h3 className="text-[20px] leading-[28px] md:text-[40px] font-bold md:leading-[48px] text-center">+200</h3>
                  <p className=" text-[16px] font-normal leading-[24px] text-center">Courses</p>
                </div>
                <div className="w-[48%] h-[60px] md:h-[80px] flex flex-col align-center justify-between">
                  <h3 className="text-[20px] leading-[28px] md:text-[40px] font-bold md:leading-[48px] text-center">50K</h3>
                  <p className=" text-[16px] font-normal leading-[24px] text-center">Mentors</p>
                </div>
              </div>
              <div className="w-[90%] md:w-[49%] h-[100%] flex items-center justify-between">
                <div className="w-[48%] h-[60px] md:h-[80px] flex flex-col align-center justify-between">
                  <h3 className="text-[20px] leading-[28px] md:text-[40px] font-bold md:leading-[48px] text-center">370k</h3>
                  <p className=" text-[16px] font-normal leading-[24px] text-center">Students</p>
                </div>
                <div className="w-[48%] h-[60px] md:h-[80px] flex flex-col align-center justify-between">
                  <h3 className="text-[20px] leading-[28px] md:text-[40px] font-bold md:leading-[48px] text-center">100+</h3>
                  <p className=" text-[16px] font-normal leading-[24px] text-center">Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}