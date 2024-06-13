import React from "react";
import { render } from "@testing-library/react";
import CourseDetail from "./CourseDetail";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { name: "Name", description: "Description", professor: "Professor" };
  const { asFragment } = render(
      <UserProvider>
        <CourseDetail item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
