import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default Card;
