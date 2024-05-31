import CardStartlittle from "../../../../components/shared-components/CardStartlittle";
import reduceImage from "../../../../assets/landing-views/edukasi/image_reduce-startlittle.png";
import reuseImage from "../../../../assets/landing-views/edukasi/image_reuse-startlittle.png";
import recycleImage from "../../../../assets/landing-views/edukasi/image_recycle-startlittle.png";
import CardArticle from "../../../../components/shared-components/CardArticle";
import ButtonNavigation from "../../../../components/shared-components/ButtonNavigation";

const Startlittle = () => {
  const articleData = [
    {
      id: 1,
      title: "Cara Mengurangi Sampah Dalam Kehidupan Sehari",
      description:
        "Belakangan banyak yang mengeluhkan bahwa bumi semakin panas, bahkan mendekati kondisi neraka.",
      date: "March 01, 2021",
      link: "/about-us",
    },
    {
      id: 2,
      title: "Cara Mengurangi Sampah Dalam Kehidupan Sehari",
      description:
        "Belakangan banyak yang mengeluhkan bahwa bumi semakin panas, bahkan mendekati kondisi neraka.",
      date: "March 01, 2021",
      link: "/about-us",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="text-center my-[116px]">
          <h1 className="mb-[19px] font-bold text-5xl">
            Mulai Dengan Hal Kecil
          </h1>
          <h2 className="font-bold text-base text-center w-[548px] mx-auto">
            Waste wise Melalui prinsip 3R kami mengajak kalian untuk memulai
            perubahan.
          </h2>
        </div>
        <CardStartlittle
          title="Reduce"
          description="Contoh penerapan Reduce, pengurangan penggunaan plastik sekali pakai dengan mengganti botol air minum plastik dengan botol air minum yang dapat diisi ulang bertujuan untuk mengurangi jumlah limbah plastik yang mencemari lingkungan."
          imageSrc={reduceImage}
          buttonLabel="Lihat Selengkapnya"
        />
        <CardStartlittle
          title="Reuse"
          description="Contoh penerapan Reuse, menggunakan kembali barang-barang yang masih layak pakai untuk mengurangi jumlah sampah yang dihasilkan."
          imageSrc={reuseImage}
          buttonLabel="Lihat Selengkapnya"
          reverse={true}
        />
        <CardStartlittle
          title="Recycle"
          description="Recycle atau daur ulang dilakukan melalui beberapa langkah praktis. Pertama, diselenggarakan workshop yang bertujuan untuk mengajarkan peserta, dalam hal ini siswa, cara mengolah limbah seperti kertas, plastik, atau kardus menjadi produk yang berguna."
          imageSrc={recycleImage}
          buttonLabel="Lihat Selengkapnya"
        />
      </div>
      <div className="container">
        <h1 className="text-left w-[582px] font-bold text-5xl">
          Temukan Lebih Banyak Informasi
        </h1>
      </div>

      <div className="container py-20">
        <div className="flex flex-col gap-y-8 md:gap-y-12">
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2">
              {articleData.map((item) => (
                <CardArticle
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-[65px]">
        <ButtonNavigation
          name="Lihat Artikel Lainya"
          bgijotua={true}
        ></ButtonNavigation>
      </div>
    </section>
  );
};

export default Startlittle;
