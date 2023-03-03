import "./App.css";
import Image from "./components/Image";

import { useRef, useState } from "react";

import {
  RiEmotionHappyLine,
  RiLoaderFill,
  RiImageAddLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";

function App() {
  const [loading, setLoading] = useState(false);
  const [imageItem, setImageItem] = useState([]);
  const [count, setCount] = useState(0);
  const [activeButton, setActiveButton] = useState(true);

  const newImage = (e) => {
    setImageItem(imageItem.concat(<Image key={count} count={count} />))
    setCount(count+1)

    if (count >= 3) {
      setActiveButton(false)
    }
  }

  return (
    <div className="main-container-app">
      <div className="main-app">
        <header className="header-title-content">
          <h1 className="header-title">
            <span className="header-text">My first application in React</span> <RiEmotionHappyLine />
          </h1>
        </header>

        <div className="content-images">{ imageItem }</div>

        <div className="button-content">
          <button {...(activeButton ? { className: "btn btn-add-image" } : { className: "btn btn-add-image btn-inactive" })} onClick={newImage}>
            <RiImageAddLine /> <span className="button-text">Add new image</span>
          </button>
          <p {...(activeButton ? { className: "button-info" } : { className: "button-info info-active" })}><span className="button-info-text">Sorry, you cannot add a new image</span> <RiEmotionUnhappyLine /></p>
        </div>
      </div>
    </div>
  );
}

export default App;