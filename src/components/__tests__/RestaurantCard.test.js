import { screen, render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

// test case1
it("Should render RestaurantCard component with props data", () => {
    // render the resData component to the JSDOM with props
    render(<RestaurantCard resData={MOCK_DATA} />);

    // querying
    const name = screen.getByText("KFC");

    // assertion
    expect(name).toBeInTheDocument();

});