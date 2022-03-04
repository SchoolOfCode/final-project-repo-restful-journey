import IngredientPage from "./IngredientPage";
import {
  screen,
  renderWithRouter,
  fireEvent,
  waitFor,
} from "../../test-utils.js";
import SearchPage from "../SearchPage/SearchPage";

// test("clicking a recipe routes to the recipe page", async () => {
//   renderWithRouter(<IngredientPage />);
//   fireEvent.click(screen.getByTestId("ingredient"), { button: 0 });

//   await waitFor(() => screen.findByTestId("instructions"));
//   expect(screen.getByTestId("instructions")).toBeInTheDocument();
// });

test(`Search page appears on click of "discover more recipes"`, async () => {
  // element is initially not present...
  renderWithRouter(<IngredientPage />);

  fireEvent.click(screen.getByTestId("discover"), { button: 0 });

  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(window.location.pathname).toBe("/search");
  });
});

test("Component renders an image container", () => {
  renderWithRouter(<IngredientPage />);
  expect(screen.getByTestId("imageContainer")).toBeInTheDocument();
});
