import React from 'react';
import PartnerSection from './PartnerSection'; // Make sure the path is correct

const partnersData = [
  {
    name: "ONDC Partner",
    description: "Complete e-commerce solutions to meet your business goals.",
    logo: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/648075665ea350dc691d1497_2%20(Large)-p-500.png",
    
  },
  {
    name: "Google Premier Partner",
    description: "Leverage the power of Google Ads to scale your business.",
    logo: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6480757a6410b57715391921_1%20(Large)-p-500.png",
   
  },
  {
    name: "Zoho Premium Partner",
    description: "Design and implement integrated business architectures and digital transformation solutions.",
    logo: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6483768cc3d75ee3ac3fc879_Zoho%20Partner%20Updated.png",
    
  },
  {
    name: "Zoho Premium Partner",
    description: "Design and implement integrated business architectures and digital transformation solutions.",
    logo: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64807591e6895ba2a0e984d3_4%20(Large)-p-500.png",
  },
  {
    name: "Zoho Premium Partner",
    description: "Design and implement integrated business architectures and digital transformation solutions.",
    logo: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6480759dd647777427305c00_5%20(Large)-p-500.png",
    
  },
  {
    name: "Zoho Premium Partner",
    description: "Design and implement integrated business architectures and digital transformation solutions.",
    logo: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/648075bda17e7f2920f7c4e2_7%20(Large)-p-500.png",
  
  },
  {
    name: "Zoho Premium Partner",
    description: "Design and implement integrated business architectures and digital transformation solutions.",
    logo: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64d8f1f21fab27b222a10911_nodejs-1-logo-p-500.png",
    
  },
];

const DynamicData = () => {
  return (
    <div className='h-10 object-contain'>
      <PartnerSection partners={partnersData} />
    </div>
  );
};

export default DynamicData;
