import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://e-comm-8fzh.vercel.app/api/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/home")}
        className="mb-4 text-blue-600"
      >
        ← Back
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-64 mb-4 rounded"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="my-2">{product.description}</p>
      <p className="font-bold">₹{product.price}</p>

      <button
        onClick={addToCart}
        className="mt-4 bg-yellow-400 px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
