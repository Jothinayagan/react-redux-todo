import { useState } from "react";
import "./App.css";
import { AddList } from "./components/AddList";
import { List } from "./components/List";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  
  return (
    <Provider store={store}>
      <div className="app-body">
        <AddList />
        <List />
      </div>
    </Provider>
  );
}

export default App;
