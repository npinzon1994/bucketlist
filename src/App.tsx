import { useEffect } from "react";
import List from "./components/List";
import ListItemForm from "./components/ListItemForm";
import { useState } from "react";
import ListItemObject from "./model/ListItem";
import MainContent from "./components/MainContent";

let isInitial = true;

function App() {
  const [items, setItems] = useState<ListItemObject[]>([]);

  const saveItemHandler = (item: ListItemObject) => {
    setItems((prevItems) => sortItemsByYear([...prevItems, item]));
  };

  useEffect(() => {
    async function fetchItemsFromBackend() {
      const response = await fetch(
        "https://bucketlist-6c666-default-rtdb.firebaseio.com/items.json"
      );

      try {
      } catch (error: any) {
        console.log(error.message);
      }
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const loadedItems = [...data];
      setItems(loadedItems);
    }
    fetchItemsFromBackend();
  }, []);

  //SENDS items to backend
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    async function postSortedItemsToBackend() {
      const response = await fetch(
        "https://bucketlist-6c666-default-rtdb.firebaseio.com/items.json",
        {
          method: "PUT",
          body: JSON.stringify(items),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    }
    postSortedItemsToBackend();
  }, [items]);
  

  return (
    <MainContent>
      <ListItemForm onSaveItem={saveItemHandler} />
      <List items={items} updateListItems={setItems}/>
    </MainContent>
  );
}

export default App;

export function sortItemsByYear(items: ListItemObject[]) {
  const newItems = [...items];
  return newItems.sort((a, b) => a.year - b.year);
}
