import React from 'react';

const ServicesAndIndustrySection = () => {
  return (
    <div className="bg-[#ffffff] ">
      <div className="container mx-auto flex flex-col md:flex-row p-12">
        
        {/* Sidebar */}
        <div className="md:w-1/3 w-full px-4 text-black">
          <h3 className="text-4xl font-bold mb-6 tracking-tighter">Services</h3>
          <ul className="space-y-2 mb-12">
            <li className="text-base font-semibold">Film & Video</li>
            <li className="text-base font-semibold">Research, Data & Analytics Solutions</li>
            <li className="text-base font-semibold">Media Solutions</li>
            <li className="text-base font-semibold">Tech Solutions</li>
            <li className="text-base font-semibold">Brand Solutions</li>
          </ul>

          <h3 className="text-4xl font-bold mb-6 tracking-tighter">Industry</h3>
          <ul className="space-y-2">
            <li className="text-base font-semibold">Other Industries</li>
            <li className="text-base font-semibold">Gaming</li>
          </ul>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full px-4 text-black ">
          <p className="text-base font-semibold mb-6">
            Parksons Cartamundi aimed to launch their new card game by merging the passion of cricket fans with the excitement of card playing. As the merchandise sponsor of the Mumbai Indians, they wanted to capture Mumbai's vibrant culture and the competitive spirit of both games.
          </p>
          <p className="text-base font-semibold mb-6 ">
            We created the ad film "Asli Fan Khelta Hai!" to celebrate the joy of playing and the spirit of Mumbai Indians supporters. The film follows a dedicated fan navigating Mumbai, encountering fellow enthusiasts like taxi drivers, fishermen, dabbawalas, and gully cricket players. Each scene showcases how their shared love for cricket and cards unites them, highlighting Mumbai's diverse and energetic fan culture.
          </p>
          <p className="text-base font-semibold">
            The campaign successfully launched Parksons Cartamundi's card game, resonating deeply with audiences. "Asli Fan Khelta Hai!" celebrated Mumbai’s passionate fan culture, showing how playing cards can unite people across boundaries. This strengthened the brand's connection with the Mumbai Indians fan base, creating a memorable and impactful brand experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesAndIndustrySection;
