import React from "react";

function Greeting({ greeting }) {
  return greeting ? (
    <p className="mt-4">Mensaje de Saludo: {greeting}</p>
  ) : null;
}

export default Greeting;
