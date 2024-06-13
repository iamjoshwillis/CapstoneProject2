import React from "react";
import { render } from "@testing-library/react";
import SpellList from "./SpellList";

it("renders without crashing", function() {
  render(<SpellList />);
});

it("matches snapshot with no spells", function() {
  const { asFragment } = render(<SpellList />);
  expect(asFragment()).toMatchSnapshot();
});
