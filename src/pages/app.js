import React, { useState } from "react";
import Header from "../components/Header";
import LoginPage from "./login";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="bg-gray-100">{isLogged ? <LoginPage /> : <Header />}</div>
  );
}

export default App;
