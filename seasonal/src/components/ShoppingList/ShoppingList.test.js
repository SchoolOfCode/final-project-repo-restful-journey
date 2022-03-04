import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList.js";

describe("Shopping List", () => {
  it('Renders heading "Shopping List".', () => {
    render(<ShoppingList />);
    const pageTitle = screen.getByText(/Shopping List/i);
    expect(pageTitle).toBeInTheDocument();
  });

  it("Shopping list renders.", () => {
    render(<ShoppingList />);
    const list = screen.getByTestId("shopping-list");
    expect(list).toBeInTheDocument();
  });

  it("Button add ingredient is enable.", () => {
    render(<ShoppingList />);
    const button = screen.getByRole("button", {
      name: /add-ingredient/i,
    });
    expect(button).toBeEnabled();
  });
});
