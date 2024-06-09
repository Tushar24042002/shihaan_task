import logo from "./logo.svg";
import "./App.css";
import FolderComponent from "./component/folder/FolderComponent";
import Service from "./Screens/Services/Service";
import SliderComponent from "./component/folder/Slider/SliderComponent";
import React from "react";

function App() {
  return (
    <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-4">
          <SliderComponent />
        </div>
      </div>
    </div>
    <Service/>
    </React.Fragment>
  );
}

export default App;
