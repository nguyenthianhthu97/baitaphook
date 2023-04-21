import React, { useEffect, useState } from "react";

export default function Counttext() {
  const [text, setText] = useState("");

  // word count
  const [wordCount, setWordCount] = useState(0);

  // character count
  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(" ");

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
    setCharCount(text.length);
  }, [text]);

  return (
    <div className="container">
      <h2>KindaCode.com</h2>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder="What is on your mind?"
        ></textarea>

        <div>
          <p className="word-count">Word Count: {wordCount}</p>
          <p className="char-count">
            Character Count (Including Whitespaces): {charCount}
          </p>
        </div>
      </div>
    </div>
  );
}
