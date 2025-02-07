import { useState } from "react";
import "./App.css";
import { AddList } from "./components/AddList";
import { List } from "./components/List";

function App() {
  const [list, setList] = useState([
    // { id: useId(), title: "Purchase clothes", completed: false },
  ]);

  return (
    <div className="app-body">
      <AddList list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
