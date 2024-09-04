import React from 'react';
import Card from './Card';

const cardData = [
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'The Renewables People UK',
    description: 'Delivering a gorgeous web experience for UK’s top Home Energy Conservation Leader.',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Centerfruit',
    description: 'Creating a zesty gamified website for a popular candy brand!',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Britannia',
    description: 'Building a Metaverse for India’s most beloved Snacking Brand',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Swiggy',
    description: 'Hyper-personalized social campaign for India’s biggest food delivery startup',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Crompton',
    description: 'Our four-pillar SEM Strategy helped India’s fastest growing Electronics Brand stay ahead of the curve',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Kotak811',
    description: 'Crafting a new-age website experience for India’s most trusted large bank',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Imagine Meats',
    description: 'Creating a delicious Brand Identity for India’s newest plant-based meat cuisine startup',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'TATA Communications',
    description: 'Creating a Tailored Website Experience for visitors of India’s biggest telecom. brands',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Swiggy',
    description: 'Hyper-personalized social campaign for India’s biggest food delivery startup',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'WeDeliver UK',
    description: 'Branding & launching UK’s newest delivery app',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Jio',
    description: 'Winning over cricket fans with an AR/VR Campaign',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Switch Mobility',
    description: 'Using Tech Gamification to educate people on the Benefits of Driving EVs',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Johnson & Johnson',
    description: 'How we raised awareness about Tuberculosis for healthcare brand Johnson & Johnson',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Imagine Meats',
    description: 'Creating a delicious Brand Identity for India’s newest plant-based meat cuisine startup',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Network 18',
    description: 'Making Headlines with our omnichannel launch campaign for a bold original News Show',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Britannia Biscafe',
    description: 'Finding Coffee’s snacking soulmate for one of India’s most loved FMCG brand',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Finolex',
    description: 'Creating our first ever feature-length brand film for Finolex Pipes',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Mumbai Police',
    description: 'Raising public awareness on Road Safety Measures with Mumbai City’s Police Department',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'H&M',
    description: 'Launching H&M’s Brighter Than Ever Collection with a twist',
  },
  {
    image: 'https://via.placeholder.com/600x300', // Replace with actual image URL
    title: 'Fevicol',
    description: 'Launching H&M’s Brighter Than Ever Collection with a twist',
  },
  
];

const TechCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card 
            key={index} 
            image={card.image} 
            title={card.title} 
            description={card.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default TechCard;
