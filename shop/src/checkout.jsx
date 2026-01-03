import { useState } from "react";
import { useNavigate } from "react-router-dom";
function checkout() {
  return (
    <div>
      <h2>Checkout</h2>

      <input placeholder="Address" />
      <input placeholder="City" />
      <input placeholder="Pincode" />

      <h3>Order Summary</h3>
      <p>Total: ₹XXXX</p>

      <button>Place Order</button>
    </div>
  );
}
export default checkout;