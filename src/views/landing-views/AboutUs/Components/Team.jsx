import flow from "../../../../assets/landing-views/AboutUs/flow-AboutUs.png";
import albert from "../../../../assets/landing-views/AboutUs/Albert-AboutUs.png";
import anna from "../../../../assets/landing-views/AboutUs/Annabel-AboutUs.png";
import jenny from "../../../../assets/landing-views/AboutUs/Jenny-AboutUs.png";
import miles from "../../../../assets/landing-views/AboutUs/Miles-AboutUs.png";
import nguyen from "../../../../assets/landing-views/AboutUs/Nguyen-AboutUs.png";
import marvin from "../../../../assets/landing-views/AboutUs/Black-AboutUs.png";

const teamData = [
  {
    title: "Albert Flores",
    Description: " Waste Wise",
    imgSrc: albert,
  },

  {
    title: "Annabel Rohans",
    Description: " Waste Wise",
    imgSrc: anna,
  },

  {
    title: "Jenny Wilson",
    Description: " Waste Wise",
    imgSrc: jenny,
  },

  {
    title: "Miles, Esther",
    Description: " Waste Wise",
    imgSrc: miles,
  },

  {
    title: "Nguyen, Shane",
    Description: " Waste Wise",
    imgSrc: nguyen,
  },

  {
    title: "Marvin",
    Description: " Waste Wise",
    imgSrc: marvin, // Corrected property name
  },
];
export const Team = () => {
  return (
    <section>
      <div className="w-full bg-primary h-[297px] flex justify-center items-center mt-11">
        <div className="container mx-auto">
          <img src={flow} alt="" />
        </div>
      </div>

      <div className="container flex flex-col justify-center items-center my-[98px]">
        <h1 className="font-bold text-5xl text-black pb-5 ">
          Bertemu Dengan Tim Kami
        </h1>
        <p className="text-base text-black text-center w-[746px]">
          Kami adalah sekumpulan individu dengan tekad kuat dan beragam latar
          belakang, berasal dari berbagai wilayah di Indonesia, yang bersatu
          demi mewujudkan kebaikan.
        </p>
      </div>

      <div className="container flex flex-wrap justify-center items-center gap-16 mb-40">
        {teamData.map((item, index) => (
          <div key={index}>
            <img src={item.imgSrc} alt="" />
            <h1 className="font-bold text-[25px] text-left">{item.title}</h1>
            <p className="text-[#2D8B26] text-sm text-left">
              {item.Description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
