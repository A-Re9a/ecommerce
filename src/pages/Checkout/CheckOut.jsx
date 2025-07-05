import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../Contexts/CartContext";

function CheckOut() {
  const { register, handleSubmit } = useForm();
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  const onSubmit = (data) => {
    console.log("بيانات العميل:", data);
    console.log("المنتجات:", cartItems);
    console.log("الإجمالي:", totalPrice);
    alert("✅ تم إرسال الطلب بنجاح");
    clearCart();
  };

  const inputClass =
    "w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="flex flex-col lg:flex-row w-full px-[100px] gap-6">
      {/* Form Section */}
      <div className="w-full lg:w-2/3 xl:w-[60%] flex flex-wrap px-4 py-6">
        <form
          className="w-full border-r border-gray-300 pr-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between py-4">
            <label>Contact</label>
            <label>Log in</label>
          </div>

          <input
            placeholder="Email or mobile phone number"
            className={inputClass}
            {...register("email", { required: true })}
          />

          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="w-4 h-4" />
            <label className="text-sm text-gray-700">
              Email me with news and offers
            </label>
          </div>

          <label className="block mb-1">Delivery</label>
          <input
            placeholder="Country/Region"
            className={inputClass}
            {...register("country")}
          />

          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <input
              className={inputClass}
              placeholder="First name"
              {...register("firstName", { required: true })}
            />
            <input
              className={inputClass}
              placeholder="Last name"
              {...register("lastName", { required: true })}
            />
          </div>

          <input
            placeholder="Address"
            className={inputClass}
            {...register("address", { required: true })}
          />

          <input
            placeholder="Apartment, suite, etc. (optional)"
            className={inputClass}
            {...register("apartment")}
          />

          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <input
              className={inputClass}
              placeholder="Postal code"
              {...register("postalCode")}
            />
            <input
              className={inputClass}
              placeholder="City"
              {...register("city")}
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="w-4 h-4" />
            <label className="text-sm text-gray-700">
              Save this information for next time
            </label>
          </div>

          <label className="block mb-1">Shipping method</label>
          <input
            placeholder="Standard Shipping"
            className={inputClass + " bg-gray-100"}
            {...register("shippingMethod")}
          />

          <div className="mb-6">
            <h3 className="font-bold">Payment</h3>
            <p className="text-sm text-gray-600 mb-2">
              All transactions are secure and encrypted.
            </p>
            <div className="w-full h-[120px] bg-gray-200 flex flex-col justify-center items-center rounded-md">
              <p className="text-sm text-gray-600 text-center">
                This store can’t accept payments right now.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white h-14 font-bold mb-6 rounded-md hover:bg-blue-700 transition"
          >
            Pay now
          </button>

          <hr className="my-6" />
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Privacy policy
          </a>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="w-full lg:w-1/3 xl:w-[40%] px-4 py-6">
        {cartItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 mb-4 relative">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-16 h-16 border border-gray-300 rounded"
            />
            <p className="flex-1 text-sm">{item.name}</p>
            <p className="text-sm">${item.price.toFixed(2)}</p>
            <div className="w-5 h-5 rounded-full bg-gray-400 text-white text-xs flex items-center justify-center absolute left-12 top-[-5px]">
              {item.quantity}
            </div>
          </div>
        ))}

        <div className="mt-8 text-sm">
          <div className="flex justify-between mb-2">
            <p>Subtotal · {cartItems.length} items</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-bold mb-1">
            <p>Total</p>
            <p>
              USD <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </p>
          </div>
          <p className="text-gray-500">Including taxes</p>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
