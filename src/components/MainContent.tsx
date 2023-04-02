import { FC, ReactNode } from "react";
import classes from "./MainContent.module.css";
import { ReactComponent as BucketListIcon } from "../assets/bucket-list-icon-purple.svg";

type Props = { children: ReactNode };

const MainContent: FC<Props> = (props) => {
  return (
    <div className={classes.container}>
      {/* <div className={classes['title-container']}>
        <BucketListIcon className={classes.icon}/>
      </div> */}
      <h1>Bucket List</h1>
      <h3>Whatever you want, it's up to you.</h3>
      {props.children}
    </div>
  );
};

export default MainContent;
