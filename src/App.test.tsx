import { render, screen } from "@testing-library/react";
import App from "./App";

test("app component test", () => {
  render(<App />);
  const linkElement = screen.getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
