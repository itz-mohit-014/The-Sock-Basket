import {  useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { ICartProp, useCart } from "../../context/CartContext";

const CartPage = () => {
    const {state, dispatch} = useCart()
    const [cart, setCart] = useState<ICartProp[]>(state.cart);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.currentPrice * item.quantity,
    0
  );

  const updateQuantity = (id: string, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity} })
    toast.dismiss();
    toast.success("Item Quantity Updated.")
  };

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
    dispatch({ type: "REMOVE_ITEM", payload: id })

    toast.dismiss();
    toast.success("Item Remove Successfully");
  };

  const handleCheckout = () => {
    toast.dismiss();
    toast.success("Item purchase successfully.", {
      duration: 3000,
    });

    dispatch({
        type: "CLEAR_CART"
    })

    setCart([])

  };


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <span className="text-lg bg-amber-500 text-white px-3 py-1 rounded-full">
          {totalItems} Items
        </span>
      </div>

      <div className="space-y-4 my-8">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-md"
            >
              <img
                src={ `/images/itemsCollectionImage/${item.images[0]}`}
                alt={item.title}
                className="w-16 h-16 rounded-md"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.currentPrice} each</p>
              </div>

              <div className="flex gap-4 items-center">
              
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-0.5 bg-gray-200 rounded border-2 border-black/55 text-xl"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1)) // never be negetive
                    }
                  >
                    -
                  </button>
                  <span className="px-4 font-medium">{item.quantity}</span>
                  <button
                    className="px-2 py-0.5 bg-gray-200 rounded border-2 border-black/55 text-xl"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              
                <button
                  className="text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                 <FaTrashAlt />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      <div className="mt-6 flex max-sm:flex-wrap justify-between items-start w-full">
        <h2 className="text-xl font-semibold w-fit inline-block">
          Total: ${totalPrice.toFixed(2)}
        </h2>
        <button
          onClick={handleCheckout}
          className="mt-2  px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
