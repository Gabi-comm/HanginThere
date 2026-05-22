import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/login/login";
import Dashboard from "./components/login/pages/dashboard";
import "./components/login/loginstyle.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />;
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
