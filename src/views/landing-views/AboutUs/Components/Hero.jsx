import logoImage from "../../../../assets/landing-views/AboutUs/Logoweb-Aboutus.png";

export const Hero = () => {
  return (
    <>
      <section>
        <div className="container py-[122px] ">
          <div className="flex justify-center items-center gap-x-[71px]">
            <div>
              <img src={logoImage} alt="" />
            </div>
            <div className="flex flex-col gap-y-[30px] justify-center items-center">
              <h1 className="font-bold text-[#053F33] text-[114px]">
                Waste Wise
              </h1>
              <p className="text-[19px] text-black ]">
                Ketika kita merawat bumi, kita merawat diri kita sendiri.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
