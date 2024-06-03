import howwework from "../../../../assets/landing-views/AboutUs/Howwework-Aboutus.png";

export const HowWeWork = () => {
  return (
    <>
      <section>
        <div className="container mt-[131px] ">
          <div className="flex justify-center items-center">
            <div>
              <img src={howwework} alt="" width={603} height={435} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#2B3D40] text-5xl font-bold pb-[72px]">
                Bagaimana Kami Bekerja?
              </h1>
              <ol className="text-xl text-[#2B3D40]  list-decimal">
                <li>Registrasi dan Pembuatan Akun </li>
                <li>Pengguna menukar sampah ke banksampah terdekat.</li>
                <li>Penimbangan dan Perhitungan Insentif.</li>
                <li>Penukaran sampah menjadi poin.</li>
                <li>Pengelolaan Sampah berkelanjutan.</li>
                <li>Peningkatan Berkelanjutan.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
