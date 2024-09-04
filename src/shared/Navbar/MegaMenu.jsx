import React, { useState } from 'react';

const MegaMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="  relative">
      {/* Main menu item */}
      <div
        className="  px-4 py-2 text-gray-900 font-semibold cursor-pointer hover:text-black"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Solutions

        {/* Dropdown Content */}
        {open && (
          <div
            className="absolute left-0 top-full mt-2 w-[1000px] bg-white shadow-lg rounded-lg p-4 flex z-50"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {/* Sidebar Links */}
            <div className="w-1/4 p-4 text-2xl font-bold space-y-4">
              <div>Brand Solutions</div>
              <div>Tech Solutions</div>
              <div>Media Solutions</div>
            </div>

            {/* Main Content with Images */}
            <div className="w-3/4 p-2 grid grid-cols-2 gap-4">
              <div >
                
                <div>
                <img
                  src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/669fa0f361c519d7bc7b7084_cards.png"
                  alt="On The Field & The Card Table"
                  className="w-full h-52 "
                />
                </div>

                
               
                
                <div>
                  <p className="text-black font-semibold">Bringing together cricket fans with a fan-stack-tic film for a playing cards brand.</p>
                </div>
              </div>
              <div>
                <img
                  src="https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/669f9fbcc3481015e0e2112f_MOTOR.png"
                  alt="Bharat Ka Super Auto"
                  className="w-full h-52"
                />
                <div >
                  <p className="text-black font-semibold">Launching Bharat Ka Super Auto with Montra Electric
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
