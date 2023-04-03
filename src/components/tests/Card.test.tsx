import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Card from "../Card";

describe("Card component", () => {
  test("successfully renders to the screen", () => {
    render(
      <Card>
        <p>Rendered!</p>
      </Card>
    );
    const card = screen.getByTestId("container");
    expect(card).toBeInTheDocument();
  });

  test("is not null", () => {
    render(
      <Card>
        <p>Rendered!</p>
      </Card>
    );
    const card = screen.queryByTestId("container");
    expect(card).not.toBeNull();
  });

  test("receives children", () => {
    render(
      <Card>
        <p>Rendered!</p>
      </Card>
    );
    const child = screen.getByText("Rendered!");
    expect(child).toBeInTheDocument();
  });
});
