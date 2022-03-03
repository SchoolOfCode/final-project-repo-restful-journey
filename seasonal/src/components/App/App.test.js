import App from "./App";
import { screen, renderWithRouter } from "../../test-utils.js";

test("App function sucessfully mounts", async () => {
  renderWithRouter(<App />);
  expect(screen.getByTestId("mainbox")).toBeInTheDocument();
});
