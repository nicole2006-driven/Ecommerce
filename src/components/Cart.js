// Redux: useCart hook provides cart state and dispatch
import { useCart } from "../context/CartContext";
// React Hook: useMemo optimizes calculation performance
import { useMemo } from "react";
// Routing: useNavigate hook allows programmatic navigation
import { useNavigate } from "react-router-dom";

function Cart() {
  // Redux: Access state (cart items) and dispatch (update cart)
  const { state, dispatch } = useCart();
  // Routing: Hook to navigate to other pages
  const navigate = useNavigate();

  // React Hook: useMemo caches total calculation (recalculates only when cartItems change)
  const total = useMemo(() => {
    return state.cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [state.cartItems]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>

      {state.cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {state.cartItems.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ddd"
            }}>
              <span>{item.name} - ₹{item.price}</span>

              {/* Redux: Dispatch REMOVE action to delete item from cart */}
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: index })}
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  padding: "6px",
                  borderRadius: "5px"
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          {/* Routing: Navigate to checkout page */}
          <button
            onClick={() => navigate("/checkout")}
            style={{
              marginTop: "10px",
              background: "#2563eb",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "6px"
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
