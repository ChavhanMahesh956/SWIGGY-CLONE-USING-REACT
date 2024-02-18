import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
  } = resData?.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(" ,  ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withRestroCardOpened = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
