import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

// mock fetch function
// fetch is not part of javascript, it's superpower given to us by browser
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// test case 1
it("Should search Res List for burger text input", async () => {
  // render the Body component to the JSDOM (Body component contains API call)
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // before searching
  // querying
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // assertion
  expect(cardsBeforeSearch.length).toBe(20);
  // after searching
  // querying
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  // trigger change event
  fireEvent.change(searchInput, { target: { value: "burger" } });
  // trigger click event
  fireEvent.click(searchBtn);
  // screen should all the cards that have burger, here it's one
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // assertion
  expect(cardsAfterSearch.length).toBe(1);
});


// test case2
it("Should render the top rated restaurants", async () => {
  // render the body component to the JSDOM (Body component contains API call)
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  // before applying the filter
  // querying
  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  // assertion
  expect(cardsBeforeFilter.length).toBe(20);

  // after applying the filter
  // find button
  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

  // fire the event to click the topRatedBtn
  fireEvent.click(topRatedBtn);

  // querying
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  // assertion
  expect(cardsAfterFilter.length).toBe(17);
});
