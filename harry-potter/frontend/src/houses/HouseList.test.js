import React from "react";
import { render } from "@testing-library/react";
import HouseList from "./HouseList"

it("renders without crashing", function() {
  render(<HouseList />);
});

it("matches snapshot with no houses", function() {
  const { asFragment } = render(<HouseList />);
  expect(asFragment()).toMatchSnapshot();
});
