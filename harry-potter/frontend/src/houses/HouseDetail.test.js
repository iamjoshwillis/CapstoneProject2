import React from "react";
import { render } from "@testing-library/react";
import HouseDetail from "./HouseDetail"
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { name: "Name", description: "Description", founder: "Founder" };
  const { asFragment } = render(
      <UserProvider>
        <HouseDetail item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
