import React, { useEffect, useRef, useState } from "react";

const BackgroundVideo = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playerRef = useRef<any>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

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
          },
        },
      });
    };

    // More aggressive approach to unlock audio
    const tryPlayAudio = () => {
      if (audioRef.current && !audioPlaying) {
        // First try with inaudible volume to trick autoplay policies
        audioRef.current.muted = false;
        audioRef.current.volume = 0.01;

        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Now increase volume gradually
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.volume = 1;
                  setAudioPlaying(true);
                }
              }, 500);
            })
            .catch(() => {});
        }
      }
    };

    // Unlock audio on first interaction
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = 1;
        audioRef.current.play().then(() => setAudioPlaying(true)).catch(() => {});
      }

      // Remove all event listeners once audio is playing
      ["mousemove", "click", "touchstart", "keydown", "scroll"].forEach((event) => {
        window.removeEventListener(event, enableAudio);
      });
    };

    // Add multiple event listeners for user interaction
    ["mousemove", "click", "touchstart", "keydown", "scroll"].forEach((event) => {
      window.addEventListener(event, enableAudio);
    });

    // Try playing immediately
    tryPlayAudio();

    // Also try after a short delay
    setTimeout(tryPlayAudio, 1000);

    return () => {
      // Remove all event listeners
      ["mousemove", "click", "touchstart", "keydown", "scroll"].forEach((event) => {
        window.removeEventListener(event, enableAudio);
      });
    };
  }, [audioPlaying]);

  // Manual play button handler
  const handlePlayButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1;
      audioRef.current.play().then(() => setAudioPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* YouTube Video */}
      <div id="yt-player" className="absolute inset-0 w-full h-full" />

      {/* Local Audio */}
      <audio
        ref={audioRef}
        src="/audio/background.mp3"
        loop
        preload="auto"
        playsInline
      />

      {/* Manual play button as fallback (only shown if audio isn't playing) */}
      {!audioPlaying && (
        <button
          onClick={handlePlayButtonClick}
          className="absolute bottom-20 right-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full z-20"
          aria-label="Play music"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}

      {/* Overlays to hide YouTube UI */}
      <div className="absolute top-0 left-0 w-full h-[40px] bg-black z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[55px] bg-black z-10"></div>
      <div className="absolute top-[40px] right-0 w-[100px] h-[40px] bg-black z-10"></div>
    </div>
  );
};

export default BackgroundVideo;
