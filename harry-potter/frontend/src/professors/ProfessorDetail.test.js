import React from "react";
import { render } from "@testing-library/react";
import ProfessorDetail from "./ProfessorDetail";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { name: "Name", description: "Description", house: "House", courses: "Courses" };
  const { asFragment } = render(
      <UserProvider>
        <ProfessorDetail item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
