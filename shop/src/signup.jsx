import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./config";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/home"); // 🔁 redirect to home
  };

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <br />

      <button onClick={handleSignup}>Sign Up</button>
      <br />

      <button onClick={() => navigate("/")}>
        Already have account
      </button>
    </div>
  );
}

export default Signup;
