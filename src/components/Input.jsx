import React from "react";

function Input({ product, handleChange }) {
  return (
    <>
      <label htmlFor="name">
        Name :
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default Input;
