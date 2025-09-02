import React, { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const playerRef = useRef<any>(null);

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
          mute: 1, // start muted (required for autoplay)
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

            // Wait for website load
            window.onload = () => {
              // After 2s, start listening for mouse move
              setTimeout(() => {
                const handleMouseMove = () => {
                  event.target.unMute(); // unmute video
                  event.target.setVolume(50); // max volume
                  window.removeEventListener("mousemove", handleMouseMove);
                };

                window.addEventListener("mousemove", handleMouseMove);
              }, 1000);
            };
          },
        },
      });
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div id="yt-player" className="absolute inset-0 w-full h-full" />
      {/* Overlays to hide YouTube UI */}
      <div className="absolute top-0 left-0 w-full h-[40px] bg-black z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[55px] bg-black z-10"></div>
      <div className="absolute top-[40px] right-0 w-[100px] h-[40px] bg-black z-10"></div>
    </div>
  );
};

export default BackgroundVideo;
