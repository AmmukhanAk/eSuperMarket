import React,{useEffect} from "react";
import {Provider } from "react-redux"
import { configStore } from "./state/store/configStore";

import './App.css';
import {Home} from "./components/Home.jsx"
import {getProducts}from "./service/products"

function App() {
  const LocalStore = configStore()
  return (
    <div>
      <Provider store={LocalStore}>
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
