import Homepage from "./Homepage";
import { render, screen, waitFor } from "../../test-utils.js";

test("doesn't render a date when data doesn't load", () => {
  render(<Homepage />);
  expect(screen.queryByTestId("homepageDate")).toBeNull();
});

test("user greeting appears on data load", async () => {
  // element is initially not present...
  render(<Homepage />);
  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(screen.getByText("VEGGIES")).toBeInTheDocument();
  });
});
