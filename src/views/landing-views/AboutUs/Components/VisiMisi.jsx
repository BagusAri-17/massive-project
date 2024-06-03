import aboutusimage from "../../../../assets/landing-views/AboutUs/Aboutusabsolute-aboutus.png";

export const VisiMisi = () => {
  return (
    <>
      <section>
        {" "}
        <div className="w-full bg-primary h-[770px] flex justify-center items-center relative mt-[222px]">
          <div
            className="absolute inset-x-11 -top-60 h-[458px] w-[1260px] z-10 bg-white flex text-center rounded-[20px] justify-center items-center shadow-lg"
            style={{ boxShadow: "0 0 50px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center gap-x-[167px]">
              <div className="flex justify-center items-center flex-col w-[566px] h-[270px] px-6">
                <h1 className="font-bold text-[48px] text-[#2B3D40] pb-8">
                  Tentang Kami
                </h1>
                <p className="text-[#2B3D40] text-base text-left">
                  Wastewise adalah platform yang bertujuan untuk membantu Anda
                  mengelola sampah dengan cara yang lebih berkelanjutan dan
                  menguntungkan. Dengan Website Kami, Anda dapat dengan mudah
                  mendaur ulang sampah Anda tanpa ribet. Kami menyediakan
                  fasilitas untuk memasukkan jenis dan berat sampah Anda, dan
                  dalam sekejap, Anda akan mendapatkan insentif berupa koin yang
                  dapat ditukar dengan hadiah atau uang tunai.
                </p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <img
                  src={aboutusimage}
                  alt="About Us"
                  width={354}
                  height={354}
                />
              </div>
            </div>
          </div>
          <div className="container h-full flex flex-col justify-center items-center pt-[144px]">
            <h1 className="font-bold text-white text-5xl text-center">
              Visi Dan Misi
            </h1>
            <div className="flex justify-center items-center gap-x-[73px] pt-[80px]">
              <div className="flex flex-col justify-center items-center gap-y-[30px] border-e">
                <h1 className="text-white font-bold text-[43px]">Visi</h1>
                <p className="text-center text-[25px] text-white">
                  Visi Kami Adalah sebagai wadah untuk mewujudkan masyarakat
                  yang peduli terhadap lingkungan yang bersih dan sehat.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-[30px]">
                <h1 className="text-white font-bold text-[43px]">Misi</h1>
                <p className="text-center text-[25px] text-white">
                  Misi Kami Mengajak masyarakat untuk peduli terhadap lingkungan
                  serta memberikan edukasi terhadap masyarakat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisiMisi;
