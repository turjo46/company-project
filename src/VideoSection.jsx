
import ReactPlayer from 'react-player';

const VideoSection = () => {
  return (
    <section className="">
      <div className="container mx-auto  ">
       

        {/* Responsive YouTube Embed */}
        <div className="relative overflow-hidden w-full "> {/* Set custom height here */}
          <ReactPlayer
            className="absolute justify-center top-48 left-96 w-full h-screen"
            url={"https://youtu.be/_eoJHpnDrZY"}
        
        
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></ReactPlayer>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
