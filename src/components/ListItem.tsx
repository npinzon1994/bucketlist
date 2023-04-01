import { FC } from "react";

type Props = { description: string; year: number };

const ListItem: FC<Props> = (props) => {
  return <li>
    <span>{props.description}</span>
    <span>{props.year}</span>
  </li>;
};

export default ListItem;
