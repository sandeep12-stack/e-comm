import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

        {/* Address Form */}
        <div className="space-y-3">
          <input
            placeholder="Address"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="City"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Pincode"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Order Summary */}
        <div className="mt-5 border-t pt-4">
          <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
          <p className="text-gray-700">Total: <span className="font-bold">₹XXXX</span></p>
        </div>

        {/* Buttons */}
        <button className="w-full mt-5 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Place Order
        </button>

        <button
          onClick={() => navigate("/home")}
          className="w-full mt-3 text-blue-600 hover:underline"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Checkout;
