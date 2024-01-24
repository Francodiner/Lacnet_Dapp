// SetGreetingName.js
import React, { useState } from "react";

function SetGreetingName({ name, setNameAndGreet }) {
  const [nameInput, setNameInput] = useState("");

  const handleInputChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleButtonClick = () => {
    setNameAndGreet(nameInput);
    setNameInput("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nameInput}
        onChange={handleInputChange}
        className="form-control mb-2"
      />
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Establecer Nombre
      </button>
    </>
  );
}

export default SetGreetingName;
