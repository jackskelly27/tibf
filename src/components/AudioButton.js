import React from "react";

export default function AudioButton(props) {
  const audio = new Audio(
    // "/tibf_original_Tessitore.mp3"
    // `${props.name}`
    props.name
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