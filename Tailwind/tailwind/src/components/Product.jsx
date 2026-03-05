import { useState } from "react";

const product = {
  name: "Moto Leather Jacket",
  price: 184,
  image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
};

export default function ProductCard() {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f4f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          width: 280,
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        }}
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Info */}
        <div style={{ padding: "16px 20px 20px" }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#111",
              marginBottom: 4,
            }}
          >
            {product.name}
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#111",
              marginBottom: 16,
            }}
          >
            ${product.price}
          </p>

          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            style={{
              width: "100%",
              padding: "12px 0",
              background: added ? "#22c55e" : "#111",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
