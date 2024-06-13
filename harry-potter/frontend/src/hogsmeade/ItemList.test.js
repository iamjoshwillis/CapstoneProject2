import React from "react";
import { render } from "@testing-library/react";
import ItemsList from "./ItemsList";

it("renders without crashing", function() {
  render(<ItemsList />);
});

it("matches snapshot with no items", function() {
  const { asFragment } = render(<ItemsList />);
  expect(asFragment()).toMatchSnapshot();
});
