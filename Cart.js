import { useDispatch, useSelector } from "react-redux";
import ItemListAccordian from "./ItemListAccordian";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearHandlerOnCkick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-2">
      <h1 className="font-bold p-4">Cart</h1>

      <button
        className="border border-solid rounded-lg bg-gray-200 hover:bg-white"
        onClick={clearHandlerOnCkick}
      >

        <h4 className="font-semibold">Clear Cart</h4>
      </button>

      <div className="w-6/12 m-auto">
        <ItemListAccordian items={cartItems} />
      </div>
      <div className=" py-40 font-bold">
        {cartItems.length === 0 && (
          <h4>Your Cart is Empty. Please add your cart...</h4>
        )}
      </div>
    </div>
  );
};

export default Cart;
