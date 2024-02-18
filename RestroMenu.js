import useRestroMenu from "../utils/useRestroMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import RestroCategory from "./RestroCategary";

const RestroMenu = () => {
  const { resId } = useParams();

  const menuInfo = useRestroMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestroCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showToggle={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestroMenu;
