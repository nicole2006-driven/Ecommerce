// Props: product (object) and addToCart (callback function) received from parent
function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {/* Props: Display product data received from parent */}
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      {/* Props: Call parent callback function with product data */}
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "8px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;