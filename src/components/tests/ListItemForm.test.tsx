import "@testing-library/jest-dom";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ListItemForm from "../ListItemForm";
import ListItemObject from "../../model/ListItem";
import ListItem from "../ListItem";

// const item = new ListItemObject("my goal", 2023, "G1", () => {});

// const formElement = <ListItemForm onSaveItem={() => {}} />;
// const listItem = <ListItem description={item.description} year={item.year} id={item.id} onRemove={item.onRemove}/>;

// afterEach(() => {
//     cleanup();
// })

describe("Form Component", () => {
  test("renders to the screen", () => {
    // render(formElement);
    // expect(screen.getByTestId("form")).toBeInTheDocument();
    // expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  // test("-- After Submit -- creates list item with correct description", () => {
  //   render(formElement);
  //   render(listItem);
  //   const submitButtonElement = screen.getByTestId("submit-button");

  //   userEvent.click(submitButtonElement);

  //   const outputElement = screen.getByText(item.description);
  //   expect(outputElement).toBeInTheDocument();
  // });

  // test("-- After Submit -- creates list item with correct year", () => {
  //   render(formElement);
  //   render(listItem);
  //   const submitButtonElement = screen.getByTestId("submit-button");

  //   userEvent.click(submitButtonElement);

  //   const outputElement = screen.getByText(item.year);
  //   expect(outputElement).toBeInTheDocument();
  // })

});
