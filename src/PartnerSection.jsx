import React from "react";

const PartnerSection = ({ partners }) => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto ">
        <h2 className="text-6xl font-bold text-black mb-10 p-10 tracking-tighter">
          Proudly Collaborating With The Most Cutting-Edge Platforms In The Industry
        </h2>
        
        <div className="grid grid-cols-3 items-center text-center  justify-center space-y-6 lg:space-y-0 lg:space-x-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <img 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                className="mx-auto mb-2 h-24 object-contain"
              />
              <h3 className="text-2xl tracking-tighter font-bold text-black mb-2">{partner.name}</h3>
              <p className="text-black text-base font-semibold mb-2">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;

