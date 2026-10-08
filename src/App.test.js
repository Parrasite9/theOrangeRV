import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.history.replaceState({}, "", "/");
});

test("category navigation filters inventory and offers recovery for empty results", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("link", { name: /Pop-up campers/ }));
  expect(
    screen.getByText(
      "No RVs match these filters. Try another category or ask us what’s available.",
    ),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "View all RVs" }));
  expect(screen.getAllByRole("article")).toHaveLength(4);
});

test("direct listing URLs load and inquiry retains the selected RV", () => {
  window.history.replaceState({}, "", "/browse/7/2016/Travel/Outback");
  render(<App />);
  expect(
    screen.getByRole("heading", { name: "2016 Outback" }),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Next photo" }));
  expect(screen.getByAltText("Outback, view 2")).toHaveAttribute(
    "src",
    "/images/models/travel/outback/2.jpg",
  );
  fireEvent.click(screen.getByRole("link", { name: /Check availability/ }));
  expect(screen.getByRole("textbox")).toHaveValue(
    "Check availability: 2016 Outback\n",
  );
  expect(
    screen.getByRole("link", { name: /Open text message/ }),
  ).toHaveAttribute("href", expect.stringContaining("2016%20Outback"));
});

test("price filter and reset update results", () => {
  window.history.replaceState({}, "", "/search");
  render(<App />);
  fireEvent.change(screen.getByLabelText("Maximum price"), {
    target: { value: "10000" },
  });
  expect(screen.getAllByRole("article")).toHaveLength(2);
  fireEvent.click(screen.getByRole("button", { name: "Reset" }));
  expect(screen.getAllByRole("article")).toHaveLength(4);
});

test("unknown listing offers an inventory link instead of crashing", () => {
  window.history.replaceState({}, "", "/browse/999/2020/Travel/Missing");
  render(<App />);
  expect(
    screen.getByRole("heading", { name: "This RV or page isn’t available." }),
  ).toBeInTheDocument();
});
