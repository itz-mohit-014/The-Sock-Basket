import { useEffect, useRef, useState } from "react";
import { MdPlayArrow, MdPause } from "react-icons/md";

const Video = () => {
  const [isPlay, setIsPlay] = useState(true);
  const videoPlayer = useRef<HTMLVideoElement | null>(null);

  const handlePlayVideo = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    if (isPlay) {
      videoPlayer.current?.play();
    } else {
      videoPlayer.current?.pause();
    }
  }, [isPlay]);

  return (
    <div className="border-2 border-black p-5 my-16 w-full h-[80vh]">
      <div className="border border-black relative w-full h-full">
        <button
          onClick={handlePlayVideo}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-[#d2f08d] flex items-center justify-center cursor-pointer z-20 transition-all duration-200 hover:opacity-100 ${
            isPlay ? "opacity-40" : ""
          }`}
        >
          {isPlay ? (
            <MdPause className="h-8 w-8" />
          ) : (
            <MdPlayArrow className="h-8 w-8" />
          )}
        </button>

        <video
          ref={videoPlayer}
          autoPlay
          muted
          loop
          src="/video/video1.mp4"
          height="100%"
          width="100%"
          className="h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
