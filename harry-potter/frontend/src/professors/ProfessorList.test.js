import React from "react";
import { render } from "@testing-library/react";
import ProfessorList from "./ProfessorList"

it("renders without crashing", function() {
  render(<ProfessorList />);
});

it("matches snapshot with no professors", function() {
  const { asFragment } = render(<ProfessorList />);
  expect(asFragment()).toMatchSnapshot();
});
