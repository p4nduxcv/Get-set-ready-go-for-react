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
import Form from "./Components/Forms/Form";
import LifeCycleA from "./Components/Life Cycles/LifeCycleA";
import FragmentDemo from "./Components/Fragment/FragmentDemo";
import Table from "./Components/Fragment/Table";
import ParentCompo from "./Components/Pure Component/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentCompo />
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <NameList primary={true} /> */}
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
