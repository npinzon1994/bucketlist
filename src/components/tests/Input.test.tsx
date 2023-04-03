import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Input from "../Input";

const textInputElement = (
  <Input
    id="a1"
    labelText="Goal"
    placeholder="What would you like to accomplish?"
    type="text"
  />
);

describe("Input component", () => {
  test("successfully renders containing DIV", () => {
    render(textInputElement);
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });

  test("successfully renders LABEL", () => {
    render(textInputElement);
    expect(screen.getByTestId("label")).toBeInTheDocument();
  });

  test("successfully renders INPUT", () => {
    render(textInputElement);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
  
  test("contains id", () => {
    render(textInputElement);
    expect(textInputElement.props.id).toEqual("a1");
  })
  
  test("contains label text", () => {
    render(textInputElement);
    expect(textInputElement.props.labelText).toEqual("Goal");
  })

  test("contains type", () => {
    render(textInputElement);
    expect(textInputElement.props.type).toEqual("text");
  })

});
