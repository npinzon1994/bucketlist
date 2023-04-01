import { FC } from "react";
import ListItem from "./ListItem";

// type Props = {children: ReactNode};

const List: FC = () => {
  return (
    <ul>
      <ListItem description="Visit Europe" year={2024} />
      <ListItem description="Move out and get my own place" year={2024} />
      <ListItem
        description="Look and sound like a beautiful woman"
        year={2024}
      />
    </ul>
  );
};

export default List;
