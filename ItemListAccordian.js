import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemListAccordian = ({ items }) => {

  const dispatch = useDispatch();

  const handlerAddItem = (item) =>{
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
          </div>
          <p className="text-xs p-3">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">    
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handlerAddItem (item)}>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListAccordian;
