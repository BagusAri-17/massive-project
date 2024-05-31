import PropTypes from "prop-types";
import iconlinkpageartikel from "../../assets/landing-views/pageartikel/linkicon-pageartikel.png";
import iconwhatsaappageartikel from "../../assets/landing-views/pageartikel/whatsappicon-pageartikel.png";

const Pageartikel = ({ title, description, image }) => {
  return (
    <>
      <div className="container mt-[51px]">
        <img
          src={image}
          alt={title}
          className="mb-40 w-[1076px] h-[600px] object-cover rounded-[20px]"
        />
      </div>
      <div className="container">
        <h1 className="font-bold text-5xl py-10">{title}</h1>
        <div className="py-10 flex gap-x-7">
          <p className="font-normal text-base">Bagikan artikel ini</p>
          <div className="flex gap-x-2">
            <button>
              <img src={iconlinkpageartikel} alt="Share Link" />
            </button>
            <button>
              <img src={iconwhatsaappageartikel} alt="Share on WhatsApp" />
            </button>
          </div>
        </div>
        <div>
          <p className="font-medium text-3xl my-3 mb-20">{description}</p>
        </div>
      </div>
    </>
  );
};

Pageartikel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Pageartikel;
