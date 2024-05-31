import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
import Pageartikel from "../../../../components/shared-components/pageartikel";
import pagethumbnail from "../../../../assets/landing-views/pageartikel/pageTumbnail-pageartikel.png";

const pageartikelData = [
  {
    id: 1,
    title: "Reduce",
    description:
      "Kampanye pengurangan penggunaan plastik sekali pakai dengan mengganti botol air minum plastik dengan botol air minum yang dapat diisi ulang bertujuan untuk mengurangi jumlah limbah plastik yang mencemari lingkungan. Dengan mengadopsi botol air minum yang dapat diisi ulang, individu dapat menghindari pembuangan botol plastik sekali pakai setiap kali mereka membeli minuman, sehingga mengurangi dampak negatifnya terhadap lingkungan. Selain itu, mengajarkan cara mengurangi pemborosan makanan dengan merencanakan belanja makanan, memilih sajian yang sesuai, dan menyimpan sisa makanan dengan benar merupakan langkah penting dalam mengurangi pemborosan makanan. Dengan melakukan perencanaan belanja yang baik, individu dapat membeli makanan sesuai dengan kebutuhan sebenarnya, menghindari pembelian berlebihan yang dapat berujung pada pemborosan. Selain itu, dengan memilih sajian yang sesuai dengan porsi yang dibutuhkan dan menyimpan sisa makanan dengan benar, seperti menggunakan wadah penyimpanan yang tahan lama, masyarakat dapat mengurangi jumlah makanan yang terbuang.  Kedua langkah ini, baik pengurangan penggunaan plastik sekali pakai maupun pengurangan pemborosan makanan, merupakan upaya konkret untuk mengubah perilaku konsumsi menjadi lebih berkelanjutan dan bertanggung jawab terhadap lingkungan.",
    image: pagethumbnail,
  },
  {
    id: 2,
    title: "Reuse",
    description:
      "Kampanye pengurangan penggunaan plastik sekali pakai dengan mengganti botol air minum plastik dengan botol air minum yang dapat diisi ulang bertujuan untuk mengurangi jumlah limbah plastik yang mencemari lingkungan. Dengan mengadopsi botol air minum yang dapat diisi ulang, individu dapat menghindari pembuangan botol plastik sekali pakai setiap kali mereka membeli minuman, sehingga mengurangi dampak negatifnya terhadap lingkungan. Selain itu, mengajarkan cara mengurangi pemborosan makanan dengan merencanakan belanja makanan, memilih sajian yang sesuai, dan menyimpan sisa makanan dengan benar merupakan langkah penting dalam mengurangi pemborosan makanan. Dengan melakukan perencanaan belanja yang baik, individu dapat membeli makanan sesuai dengan kebutuhan sebenarnya, menghindari pembelian berlebihan yang dapat berujung pada pemborosan. Selain itu, dengan memilih sajian yang sesuai dengan porsi yang dibutuhkan dan menyimpan sisa makanan dengan benar, seperti menggunakan wadah penyimpanan yang tahan lama, masyarakat dapat mengurangi jumlah makanan yang terbuang.Kedua langkah ini, baik pengurangan penggunaan plastik sekali pakai maupun pengurangan pemborosan makanan, merupakan upaya konkret untuk mengubah perilaku konsumsi menjadi lebih berkelanjutan dan bertanggung jawab terhadap lingkungan.",
    image: "path/to/image2.jpg",
  },
  {
    id: 3,
    title: "Recycle",
    description:
      "Akhir-akhir ini, banyak yang mengeluhkan bahwa bumi semakin panas, bahkan mendekati kondisi neraka. Ini menimbulkan pertanyaan, apakah kita tidak mampu menjaga bumi kita? Hal sederhana seperti membuang sampah pada tempatnya sering diabaikan, meskipun Indonesia menduduki peringkat kedua penghasil sampah. Oleh karena itu, saya ingin berbagi cara mengurangi sampah dalam kehidupan sehari-hari. Pertama, selalu bawa tas saat berbelanja. Ketika saya menolak plastik di supermarket dengan membawa tas sendiri, kasirnya terkejut karena jarang ada pembeli yang peduli lingkungan. Kedua, bawa tumbler dan sedotan stainless. Saat nongkrong di warung kopi atau membeli es di warteg, saya menggunakan tumbler dan menolak plastik, yang sering membuat penjual terkejut dan menghargai usaha saya. Ketiga, bawa tupperware dari rumah saat membeli makanan di supermarket. Saya meminta penjual memasukkan barang ke tupperware saya dan menolak plastik, yang juga mengejutkan penjual karena jarang ada pembeli yang melakukannya. Meskipun belum terbiasa dalam masyarakat, tindakan sederhana ini dapat menginspirasi orang lain untuk menjaga bumi. Dengan semangat dan kesadaran, kita bisa berkontribusi untuk lingkungan yang lebih baik.",
    image: "path/to/image3.jpg",
  },
];

const Datapageartikel = ({ id }) => {
  const artikel = pageartikelData.find((artikel) => artikel.id === id);

  return (
    <section>
      <div className="container flex gap-x-10 items-center mt-[120px]">
        <button>
          <FaArrowLeft className="text-3xl" />
        </button>
        <p>Kembali Ke Halaman Utama</p>
      </div>
      {artikel && (
        <div className="container">
          <Pageartikel
            title={artikel.title}
            description={artikel.description}
            image={artikel.image}
          />
        </div>
      )}
    </section>
  );
};

Datapageartikel.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Datapageartikel;
