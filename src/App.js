import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBidnd from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreetings from "./Components/Conditional Rendering/UserGreeting";
import NameList from "./Components/Lists/NameList";

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <ParentComponent />
      <UserGreetings /> */}
      {/* <EventBidnd /> */}
      {/* <FunctionClick />
      <ClassClick />
      <Greet name="pandula">
        <button>Action</button>
      </Greet>
      <Greet name="Danajaya" />
      <Greet name="Madawala" />
      <Welcome name="jessica" />
      <Message />
      <Counter /> */}
    </div>
  );
}

export default App;
