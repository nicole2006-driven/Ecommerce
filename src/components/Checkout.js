// Redux: useCart hook for accessing cart state
import { useCart } from "../context/CartContext";
// React Hooks: useMemo for optimization, useState for local form state
import { useMemo, useState } from "react";

function Checkout() {
  // Redux: Access cart state and dispatch actions
  const { state, dispatch } = useCart();

  // useState: Local state for form fields (not Redux - local component state)
  const [form, setForm] = useState({
    name: "",
    address: "",
    payment: "COD"
  });

  // React Hook: useMemo optimizes total price calculation
  const total = useMemo(() => {
    return state.cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [state.cartItems]);

  // useState: Update local form state when user types
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Redux: Clear cart after order placement
  function handleOrder() {
    alert("Order Placed Successfully!");
    dispatch({ type: "CLEAR" });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px"
      }}>
        {/* useState: Form inputs linked to local component state */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>
      </div>

      <h3 style={{ marginTop: "20px" }}>Order Summary</h3>

      {state.cartItems.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button
        onClick={handleOrder}
        style={{
          marginTop: "10px",
          background: "#22c55e",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;