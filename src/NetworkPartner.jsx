import { useState } from "react";


const NetworkPartner = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-6xl text-black font-bold mb-10">Schbang Network & Partnerships</h2>
          <p className="text-xl font-semibold  text-black mb-10">
          Our partner companies like SchbangQ, 88GB, Spek Digital and Django Digital cater to unique market needs.

          


          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 mb-10">
            {/* Tech Logos */}
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/647162e2d67da0f056956dde_download-removebg-preview.webp"
              alt="shopify partner"
              className="h-24 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6464805d5d0d2c49f4b01339_5%20(1)-min.webp"
              alt="Google partner"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6464805d51fa16783155179c_4%20(1)-min.webp"
              alt="hubspot"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64674240ce6535840fe75043_3.webp"
              alt="Adobe solution partner "
              className="h-24  mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64674241bf45be36db12d2cb_5.webp"
              alt="premium partner"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646742411d41344dd4fe9e5a_7.webp"
              alt="uno"
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477bdd4ebdcee2b99b714e2_download-removebg-preview%20(1).png"
              alt="Godrej"
              className="h-24 object-contain mb-12"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477bd3023daf955a8fb94e0_phploho.png"
              alt=""
              className="h-24 object-contain"
            />
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6477be1b9ede7ec2c17b1590_pngwing.com-p-500.png"
              alt=""
              className="h-24 object-contain"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className=" space-y-4">
          {[
           ' SchbangQ',

           ' SPEK Digital',
            
            '88GB',
            
            'Django Digital',
            
            'ARtmeTech',
            
            'Schbang MMaximize',
          ].map((item, index) => (
            <div key={index} className="collapse-arrow border-b border-gray-300">
            <button
              className=" collapse-title w-full text-left py-4 font-bold text-black "
              
              onClick={() => toggle(index)}
            >
              {item}
            </button>

            {open === index && (
              <div className="  py-2 text-black ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac neque at dolor auctor fringilla.
                <p className="py-5 text-lg font-bold">
                View their work.
                </p>
              </div>
              
            )}

          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkPartner;