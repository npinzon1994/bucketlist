import { FC } from "react";
import ListItem from "./ListItem";
import ListItemObject from "../model/ListItem";
import classes from "./List.module.css";
import Card from "./Card";

type Props = { items: ListItemObject[] };

const List: FC<Props> = (props) => {
  const items = props.items.map((item) => (
    <ListItem
      key={Math.random()}
      description={item.description}
      year={item.year}
    />
  ));

  return (
    <Card className={classes.card}>
      <ul className={classes.list}>
        {items.length === 0 ? (
          <p className={classes['empty-list-message']}>Uh oh! You haven't recorded any goals yet!</p>
        ) : (
          items
        )}
      </ul>
    </Card>
  );
};

export default List;
