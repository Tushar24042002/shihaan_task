import "./App.css";
import Service from "./Screens/Services/Service";
import SliderComponent from "./component/Slider/SliderComponent";
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
      <Service />
    </React.Fragment>
  );
}

export default App;
