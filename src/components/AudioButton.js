import React from "react";

export default function AudioButton() {
  const audio = new Audio(
    "/tibf_original_Tessitore.mp3"
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