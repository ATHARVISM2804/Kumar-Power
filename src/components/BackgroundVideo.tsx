import React, { useEffect, useRef, useState } from "react";

const BackgroundVideo = () => {
  const playerRef = useRef<any>(null);
  const [videoMuted, setVideoMuted] = useState(true);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId: "FZGwh-hlDH4",
        playerVars: {
          autoplay: 1,
          mute: 1, // video stays muted
          controls: 0,
          rel: 0,
          loop: 1,
          playlist: "FZGwh-hlDH4",
          modestbranding: 1,
          fs: 0,
          disablekb: 1,
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            if (videoMuted) {
              event.target.mute();
            } else {
              event.target.unMute();
            }
          },
        },
      });
    };
  }, [videoMuted]);

  // Mute/unmute button handler
  const handleMuteToggle = () => {
    if (playerRef.current) {
      if (videoMuted) {
        playerRef.current.unMute();
        setVideoMuted(false);
      } else {
        playerRef.current.mute();
        setVideoMuted(true);
      }
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* YouTube Video */}
      <div id="yt-player" className="absolute inset-0 w-full h-full" />

      {/* Mute/Unmute Button - Fixed position, larger size, high visibility */}
      <button
        onClick={handleMuteToggle}
        className="absolute bottom-32 right-28 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 rounded-full z-[2100] pointer-events-auto"
        aria-label={videoMuted ? "Unmute video" : "Mute video"}
      >
        {videoMuted ? (
          // Mute icon
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zm3.5 0c0 2.76-1.69 5.1-4.1 6.07l1.45 1.45c2.89-1.34 4.65-4.23 4.65-7.52s-1.76-6.18-4.65-7.52l-1.45 1.45c2.41.97 4.1 3.31 4.1 6.07zM4.27 3L3 4.27l5 5V15h4l5 5 1.27-1.27L4.27 3z"/>
          </svg>
        ) : (
          // Unmute icon
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zm3.5 0c0 2.76-1.69 5.1-4.1 6.07l1.45 1.45c2.89-1.34 4.65-4.23 4.65-7.52s-1.76-6.18-4.65-7.52l-1.45 1.45c2.41.97 4.1 3.31 4.1 6.07z"/>
          </svg>
        )}
      </button>

      {/* Overlays to hide YouTube UI */}
      <div className="absolute top-0 left-0 w-full h-[40px] bg-black z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[55px] bg-black z-10"></div>
      <div className="absolute top-[40px] right-0 w-[100px] h-[40px] bg-black z-10"></div>
    </div>
  );
};

export default BackgroundVideo;
