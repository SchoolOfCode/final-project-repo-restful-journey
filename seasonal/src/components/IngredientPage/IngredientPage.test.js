import IngredientPage from "./IngredientPage";
import {
  screen,
  renderWithRouter,
  fireEvent,
  waitFor,
} from "../../test-utils.js";

// test("clicking a recipe routes to the recipe page", async () => {
//   renderWithRouter(<IngredientPage />);
//   fireEvent.click(screen.getByTestId("ingredient"), { button: 0 });

//   await waitFor(() => screen.findByTestId("instructions"));
//   expect(screen.getByTestId("instructions")).toBeInTheDocument();
// });

test("recipe page appears on click of a recipe", async () => {
  // element is initially not present...
  renderWithRouter(<IngredientPage />);

  fireEvent.click(screen.getByTestId("ingredient"), { button: 0 });

  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(screen.getByTestId("instructions")).toBeInTheDocument();
  });
});

test("rendering a component that uses useLocation", () => {
  const route = "/recipes";
  renderWithRouter(<IngredientPage />, { route });
  expect(screen.getByTestId("ingredient")).toHaveTextContent(route);
});

test("Component renders an image container", () => {
  renderWithRouter(<IngredientPage />);
  expect(screen.getByTestId("imageContainer")).toBeInTheDocument();
});
