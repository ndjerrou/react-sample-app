import React from "react";

function Input({ value: product, handleChange }) {
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
