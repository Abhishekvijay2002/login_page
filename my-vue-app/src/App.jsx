import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }

    axios
      .get("http://localhost:5000/protected", {
        headers: { Authorization: token },
      })
      .then((response) => setMessage(response.data.message))
      .catch(() => window.location.href = "/login");
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f8ff" }}>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
