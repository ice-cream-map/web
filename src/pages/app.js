import React from "react";
import Button from "@material-tailwind/react/Button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
      >
        Login
      </Button>
    </div>
  );
}

export default App;
