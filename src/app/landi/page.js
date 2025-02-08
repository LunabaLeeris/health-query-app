'use client'

import { useRef, useState } from "react";

export default function Landi() {
  const romanticTexts = [
    "Hi baby cakes 💕😘",
    "Miss you 😔",
    "Every moment 😉",
    "Every second ⌚",
    "If a note played evertime I thought of you 🎼",
    "I would have composed every masterpiece there is and will ever be 😎",
    "Give me a deep kiss tomorrow will yah? 😇",
    "I think you clicked the wrong button baby 😇",
    "Uhm.. That is not the right button babyy 😊",
    "... I said I want a kiss tomorrow baby. A deep one 😙",
    "Please? Me need a kiss badly 😔",
    "Please reconsider baby ☹️",
    "Really no kisss ???? That's it !?!?!?! 🙂",
    "Please baby ...",
    "Please...",
    "Kiss me please...",
    "PLEASE",
    "Thank you baby. A promise is a promise. Me expects a deep kiss tomorrow 😇😘",
    "ps: 15 mins kolang to ginawa pag pasensyahan mona baby cakes. PA Screen shot and send sakin for proof 😘"
  ]

  const [index, setIndex] = useState(0);
  const rightButton = useRef("")
  const leftButton = useRef("")
  const text = useRef("")

  const nextText = () => {
    setIndex((prevIndex) => (prevIndex + 1) % romanticTexts.length);

    if (index == 5){
        // do something here
        rightButton.current.textContent = "Yes Baby 😘";
        rightButton.current.classList.replace("romantic-button", "pink-button"); 
        leftButton.current.classList.replace("romantic-button", "red-button");
        leftButton.current.textContent = "No Baby! 😡";
    }

    if (index == 17){
        setIndex((prevIndex) => prevIndex = 18);
        rightButton.current.style.opacity = "0";
        rightButton.current.disabled = "true";
        rightButton.current.style.pointerEvents = "none";
        rightButton.current.textContent = "Will do so baby 😊. I promise";
        return;
    }

    if (index >= 6){
        setIndex((prevIndex) => prevIndex = 17);
        leftButton.current.style.opacity = "0";
        leftButton.current.disabled = "true";
        leftButton.current.style.pointerEvents = "none";
        rightButton.current.textContent = "Will do so baby 😊. I promise";
        return;
    }
  };

  const prevText = () => {
    if (index === 0) return;

    if (index >= 16){
        text.current.textContent = text.current.textContent + "E";
        return;
    }

    if (index >= 6){
        setIndex((prevIndex) => prevIndex + 1);
        return;
    }

    setIndex((prevIndex) =>
      prevIndex === 0 ? romanticTexts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="romantic-container">
      <div className="romantic-content">
        <h1 ref={text} className="romantic-text">{romanticTexts[index]}</h1>
        <div className="button-group">
          <button onClick={prevText} ref={leftButton} className="romantic-button">Previous →</button>
          <button onClick={nextText} ref={rightButton} className="romantic-button">Next →</button>
        </div>
      </div>
    </div>
  );
}
