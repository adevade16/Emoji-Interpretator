import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout Box",
  "❤️": "Love",
  "😑": "Annoyance"
};

var emojisWeKnow = Object.keys(emojiDictionary);
const restaurantDictionary = {
  cuisine: "English",
  info: [
    { name: "Mc Donalds", rating: "5" },
    { name: "Mc Donalds", rating: "5" }
  ]
};

export default function App() {
  const [inputMeaning, setInputMeaning] = useState("");

  function inputChangeHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Meaning Unavailable in our Database!";
    }
    setInputMeaning(meaning);
  }

  function listItemClickHandler(key) {
    console.log(key);
    var meaning = emojiDictionary[key];
    setInputMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1>Emoji Interpretator </h1>
      </nav>
      <input onChange={inputChangeHandler}></input>
      <h2> {inputMeaning}</h2>
      <h3> emojis we know </h3>
      <ul style={{ listStyle: "none" }}>
        {emojisWeKnow.map((key) => {
          return (
            <li
              onClick={() => {
                listItemClickHandler(key);
              }}
              style={{ display: "inline", fontSize: "2rem", cursor: "pointer" }}
            >
              {" "}
              {key}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
