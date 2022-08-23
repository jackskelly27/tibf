import React from "react";

export default function AudioButton() {
  const audio = new Audio(
    "/tibf.mp3"
  );

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}