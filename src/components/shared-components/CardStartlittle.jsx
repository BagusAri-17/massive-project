import PropTypes from "prop-types";
import ButtonNavigation from "./ButtonNavigation";

const CardStartlittle = ({
  title,
  description,
  imageSrc,
  buttonLabel,
  reverse,
}) => {
  return (
    <section>
      <div className="container my-[116px] mx-auto px-4">
        <div
          className={`flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } justify-between items-center gap-x-10`}
        >
          <div
            className={`flex flex-col gap-y-8 w-1/2 ${
              reverse ? "text-right" : "text-left"
            }`}
          >
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-base font-normal">{description}</p>
            <div className={`${reverse ? "self-end" : "self-start"}`}>
              <ButtonNavigation name={buttonLabel} />
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CardStartlittle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

CardStartlittle.defaultProps = {
  reverse: false,
};

export default CardStartlittle;
