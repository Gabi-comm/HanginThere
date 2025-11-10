import React from "react";
import Login from "./components/login/login";     
import ReactDOM from 'react-dom/client';  
import "./components/login/loginstyle.css";  
import Dashboard from "./components/login/pages/dashboard";       

function App() {
  return <Dashboard/>;
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  );
}

export default App;
