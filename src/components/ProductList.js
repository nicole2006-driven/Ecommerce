import { useCart } from "../context/CartContext";

// Props: Receives 'products' array from parent component
function ProductList({ products }) {
  // Redux: Get dispatch function from context (Redux pattern for state updates)
  const { dispatch } = useCart();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px"
    }}>
      {products.map((p) => (
        <div key={p.id} style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
          <img src={p.image} alt={p.name} style={{ width: "100%" }} />

          <h3>{p.name}</h3>
          <p style={{ color: "green" }}>₹{p.price}</p>

          <button
            // Redux Action: Dispatch ADD action with product payload
            onClick={() => dispatch({ type: "ADD", payload: p })}
            style={{
              background: "#22c55e",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;