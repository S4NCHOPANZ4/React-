import { useState } from "react";
import "./App.css";
import CreateHOC from "./components/CreateHOC";
import { DeleteItems } from "./components/deleteItems";
import { FetchApi } from "./components/FetchApi";
import ImplReducer from "./components/ImplReducer";
import ComponentA from "./components/QEcomponents/ComponentA";

function App() {
  return(
  <>
    <h3>Add and Delete Items From the List</h3>
    <DeleteItems/>
    <hr/>
    <h3>Displaying Data Coming From an API</h3>
    <FetchApi/>
    <hr/>
    <h3>Create a Higher-Order Component to reuse component logic</h3>
    <CreateHOC/>
    <hr/>
    <h3>Implementing and using Redux</h3>
    <ImplReducer/>
    <h3>Share data among components without using props and Redux</h3>
    <hr/>
    <ComponentA/>
  </>
  ) 
      
}

export default App;
