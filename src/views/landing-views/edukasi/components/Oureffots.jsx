import ourefforts from "../../../../assets/landing-views/edukasi/image_oureffort-effort.png";

const Ourefforts = () => {
  return (
    <>
      <section>
        <div className="container py-[117px]">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <img src={ourefforts} alt="" />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-5xl font-bold pb-9">Upaya Kami</h1>
              <p className="mb-4">
                Dalam upaya untuk mengatasi masalah lingkungan, edukasi juga
                menekankan pentingnya siklus hidup sampah, mulai dari produksi
                hingga pembuangan akhir, serta bagaimana siklus tersebut dapat
                dikelola secara lebih efektif. Melalui prinsip-prinsip 3R
                (Reduce, Reuse, Recycle) dan praktik pengelolaan yang
                bertanggung jawab, edukasi ini mendorong individu untuk
                mengurangi jumlah sampah yang dihasilkan, meminimalkan
                penggunaan barang sekali pakai, dan berperan aktif dalam
                pengelolaan sampah secara berkelanjutan.
              </p>
              <p className="mb-4">
                Selain itu, edukasi tentang sampah juga menekankan peran penting
                individu dalam menciptakan perubahan positif, baik melalui
                penyesuaian perilaku konsumsi maupun praktik pengelolaan sampah
                yang lebih bertanggung jawab. Ini melibatkan kesadaran akan
                dampak pribadi terhadap lingkungan serta kebutuhan untuk
                mengadopsi tindakan-tindakan yang mendukung keberlanjutan. Di
                samping itu, kolaborasi aktif dari komunitas juga menjadi fokus,
                di mana partisipasi bersama dalam kegiatan pembersihan
                lingkungan dan kampanye kesadaran dapat menciptakan lingkungan
                yang lebih bersih dan sehat bagi semua.
              </p>
              <p>
                Dengan demikian, melalui pendekatan edukasi yang komprehensif
                dan kolaboratif, diharapkan masyarakat dapat lebih sadar akan
                masalah sampah, mengubah perilaku mereka secara berkelanjutan,
                dan bersama-sama berkontribusi dalam menciptakan lingkungan yang
                lebih bersih, sehat, dan berkelanjutan bagi generasi mendatang.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourefforts;
