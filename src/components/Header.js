// Routing: Link is used for navigation without page reload
import { Link } from "react-router-dom";
// Redux: useCart hook provides access to cart state
import { useCart } from "../context/CartContext";

function Header() {
  // Redux: Get state from context (reading cart items count)
  const { state } = useCart();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#1e293b",
      color: "white"
    }}>
      <h2>My Store</h2>

      {/* Routing: Link navigates to /cart page */}
      <Link to="/cart" style={{
        textDecoration: "none",
        color: "white",
        background: "#38bdf8",
        padding: "8px 12px",
        borderRadius: "8px"
      }}>
        Cart ({state.cartItems.length})
      </Link>
    </div>
  );
}

export default Header;