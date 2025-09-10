import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

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
        className="absolute bottom-2 z-[1000] md:bottom-32 md:right-28 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 rounded-full pointer-events-auto"
        aria-label={videoMuted ? "Unmute video" : "Mute video"}
      >
        {videoMuted ? (
          <VolumeX size={32} className="text-white" />
        ) : (
          <Volume2 size={32} className="text-white" />
        )}
      </button>

      {/* Overlays to hide YouTube UI */}
      <div className="absolute top-0 left-0 w-full h-[55px] bg-black z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[55px] bg-black z-10"></div>
      <div className="absolute top-[40px] right-0 w-[100px] h-[40px] bg-black z-10"></div>
    </div>
  );
};

export default BackgroundVideo;
