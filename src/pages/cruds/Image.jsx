import React, { useState } from 'react';

const Image = ({ value, onChange }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        onChange(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {value && <img src={value} alt="Product Image" />}
    </div>
  );
};

export default Image;