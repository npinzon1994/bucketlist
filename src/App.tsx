import React from "react";
import List from "./components/List";
import ListItemForm from "./components/ListItemForm";
import { useState } from "react";
import ListItemObject from "./model/ListItem";
import MainContent from "./components/MainContent";

function App() {
  const [items, setItems] = useState<ListItemObject[]>([]);

  const saveItemHandler = (item: ListItemObject) => {
    setItems((prevItems) => [item, ...prevItems]);
  };

  return (
    <MainContent>
      <ListItemForm onSaveItem={saveItemHandler} />
      <List items={items} />
    </MainContent>
  );
}

export default App;
