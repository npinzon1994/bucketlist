import React from "react";
import List from "./components/List";
import ListItemForm from "./components/ListItemForm";

function App() {
  return (
    <div>
      <h1>Bucket List</h1>
      <ListItemForm />
      <List />
    </div>
  );
}

export default App;
