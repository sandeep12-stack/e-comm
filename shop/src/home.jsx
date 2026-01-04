import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  // fetch products from backend
  useEffect(() => {
    fetch("https://e-comm-8fzh.vercel.app/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // remove product from cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-gray-900 text-white p-4 flex justify-between">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/home")}
        >
          MyAmazon
        </h1>
        <p>Cart Items: {cart.length}</p>
      </div>

      {/* PRODUCTS */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded shadow cursor-pointer"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              {/* ✅ IMAGE */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-3 rounded"
              />

              <h2 className="font-bold">{product.name}</h2>
              <p className="mb-2">₹{product.price}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // stop navigation
                  addToCart(product);
                }}
                className="bg-yellow-400 px-3 py-1 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* CART */}
      <div className="bg-white m-6 p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-3">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <p>
                {item.name} - ₹{item.price}
              </p>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <hr className="my-3" />
        <p className="font-bold">Total: ₹{totalPrice}</p>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Home;
