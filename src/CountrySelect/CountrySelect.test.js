import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { render } from "@testing-library/react";
import CountrySelect, { LIST_COUNTRIES } from ".";

const getMockedComponent = () => {
  const mocks = [
    {
      request: {
        query: LIST_COUNTRIES,
      },
      result: {
        data: {
          countries: [
            {
              name: "Andorra",
              __typename: "Test",
              code: "AD",
            },
            {
              name: "United Arab Emirates",
              __typename: "Test",
              code: "AE",
            },
            {
              name: "Afghanistan",
              __typename: "Test",
              code: "AF",
            },
          ],
        },
      },
    },
  ];

  return (
    <MockedProvider mocks={mocks}>
      <CountrySelect />
    </MockedProvider>
  );
};

describe("Country Select", () => {
  it("finishes loading", async () => {
    const { findByText, debug } = render(getMockedComponent());
    expect(await findByText("Andorra")).toBeTruthy();
    debug();
  });
});
