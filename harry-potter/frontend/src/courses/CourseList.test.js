import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";

it("renders without crashing", function() {
  render(<CourseList />);
});

it("matches snapshot with no courses", function() {
  const { asFragment } = render(<CourseList />);
  expect(asFragment()).toMatchSnapshot();
});
