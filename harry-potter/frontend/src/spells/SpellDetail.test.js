import React from "react";
import { render } from "@testing-library/react";
import SpellDetail from "./SpellDetail";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { name: "Name", description: "Description" };
  const { asFragment } = render(
      <UserProvider>
        <SpellDetail item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
