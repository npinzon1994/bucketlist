import { FC, MouseEvent } from "react";
import ListItem from "./ListItem";
import ListItemObject from "../model/ListItem";
import classes from "./List.module.css";
import Card from "./Card";

type Props = { items: ListItemObject[]; updateListItems: (newItems: ListItemObject[]) => void };

const List: FC<Props> = (props) => {
  function removeItem(id: string) {
    props.updateListItems(props.items.filter((item) => item.id !== id));
  }

  const items = props.items.map((item) => (
    <ListItem
      key={item.id}
      description={item.description}
      year={item.year}
      id={item.id}
      onRemove={removeItem.bind(null, item.id)}
    />
  ));

  return (
    <Card className={classes.card}>
      <ul className={classes.list}>
        {items.length === 0 ? (
          <p className={classes["empty-list-message"]}>
            Uh oh! You haven't recorded any goals yet!
          </p>
        ) : (
          items
        )}
      </ul>
    </Card>
  );
};

export default List;

// export function sortItemsByYear(items: ListItemObject[]) {
//   const newItems = [...items];
//   return newItems.sort((a, b) => a.year - b.year);
// }
