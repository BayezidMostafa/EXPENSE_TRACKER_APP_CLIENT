import React from "react";
import RedHome from "../../Assets/Logo/home.svg";
import BlueCar from "../../Assets/Logo/blue-car.svg";
import Keys from "../../Assets/Logo/keys.svg";
import Video from "../../Assets/Logo/video.svg";
import Game from "../../Assets/Logo/game.svg";
import Paper from "../../Assets/Logo/papers.svg";
import Shop from "../../Assets/Logo/cart.svg";
import IndigoCar from "../../Assets/Logo/indigo-car.svg";
import GreenCar from "../../Assets/Logo/green-car.svg";
import CatagoryCard from "./CatagoryCard";

const Category = () => {
  const categories = [
    {
      logo: RedHome,
      text: "Home",
    },
    {
      logo: BlueCar,
      text: "Gas",
    },
    {
      logo: Keys,
      text: "Security",
    },
    {
      logo: Video,
      text: "Videos",
    },
    {
      logo: Game,
      text: "Games",
    },
    {
      logo: Paper,
      text: "Papers",
    },
    {
      logo: Shop,
      text: "Shops",
    },
    {
      logo: IndigoCar,
      text: "Travel",
    },
    {
      logo: GreenCar,
      text: "Service",
    },
    {
      logo: Video,
      text: "Videos",
    },
    {
      logo: Game,
      text: "Games",
    },
    {
      logo: Paper,
      text: "Papers",
    },
    {
      logo: Shop,
      text: "Shops",
    },
    {
      logo: IndigoCar,
      text: "Travel",
    },
    {
      logo: GreenCar,
      text: "Service",
    },
  ];
  return (
    <div className="grid grid-cols-3 my-5 gap-4">
      {categories.map((category, index) => (
        <CatagoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default Category;
