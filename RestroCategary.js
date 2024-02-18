import ItemListAccordian from "./ItemListAccordian";

const RestroCategory = ({ data, showToggle, setShowIndex}) => {

  const HandleClick = () => {
  setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-100">
      <div
        className="flex justify-between cursor-pointer"
        onClick={HandleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔰</span>
      </div>
      <div>{showToggle && <ItemListAccordian items={data.itemCards} />}</div>
    </div>
  );
};

export default RestroCategory;
