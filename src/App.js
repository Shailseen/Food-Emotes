import React, { useState } from "react";
import "./styles.css";
var emojiList = {
  "🥙": "Stuffed Flatbread",
  "🌯": "Burrito",
  "🫔": "Tamale",
  "🍡": "Dango",
  "🍩": "Doughnut",
  "🍘": "Rice Crackers",
  "🍢": "Oden",
  "🍜": "Steaming Bowl",
  "🍟": "French Fries",
  "🦞": "A Lobster",
  "🍱": "Bento",
  "🍤": "Fried shrimp"
};

var emojiWeHave = Object.keys(emojiList);
export default function App() {
  const [emojiNames, setNames] = useState("");

  function emojiConverter(event) {
    var inputValueOnTime = event.target.value;
    // console.log(inputValueOnTime);
    var emojiNames = emojiList[inputValueOnTime];
    if (emojiNames === undefined)
      emojiNames = "This emoji is not in our database!";
    setNames(emojiNames);
  }

  function emojiClickHandler(emoji) {
    var emojiNames = emojiList[emoji];
    setNames(emojiNames);
    // console.log(emojiNames);
  }

  return (
    <div className="App">
      <h1>Food Emoji</h1>
      <input onChange={emojiConverter} />
      <h3> {emojiNames} </h3>
      <h3>We have Emojis are</h3>

      <ul>
        {emojiWeHave.map((item) => {
          // console.log(item);
          return (
            <li className="designing" onClick={() => emojiClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
