// import Footer from "../../../../components/layout-components/Footer";
// import Header from "../../../../components/layout-components/Header";
import { FaArrowLeft } from "react-icons/fa";
import coveredukasi from "../../../../assets/landing-views/edukasi/image_coverhome-edukasi.png";

const Heroedukasi = () => {
  return (
    <>
      <section>
        <div className="container flex gap-x-10 items-center py-[121px]">
          <div>
            {" "}
            <button>
              {" "}
              <FaArrowLeft className="text-3xl" />
            </button>
          </div>
          <p>Kembali Ke Halaman Utama</p>
        </div>
        <div>
          <div className="relative">
            <img src={coveredukasi} alt="" className="bg-cover w-full" />
            <div className="absolute inset-0  mx-auto my-44 w-[856px]">
              <h1 className="text-center font-bold text-white text-[64px]">
                Edukasi Seputar Sampah
              </h1>
              <br />
              <h2 className="text-center font-bold text-white text-[25px]">
                Edukasi tentang masalah sampah adalah upaya penting dalam
                meningkatkan kesadaran akan dampak negatifnya terhadap
                lingkungan dan mendorong tindakan positif untuk mengatasinya.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Heroedukasi;
