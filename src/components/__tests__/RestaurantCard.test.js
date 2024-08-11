import { screen, render } from "@testing-library/react";
import RestaurantCard, {withSpeedyLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

// test case1
it("Should render RestaurantCard component with props data", () => {
    // render the RestaurantCard component to the JSDOM with props
    render(<RestaurantCard resData={MOCK_DATA} />);

    // querying
    const name = screen.getByText("KFC");

    // assertion
    expect(name).toBeInTheDocument();

});

// test case2
it("Should render RestaurantCard with speedy label", () => {
    // test Higher Order Component with Speedy label
    const RestaurantCardSpeedy = withSpeedyLabel(RestaurantCard);
    // render the component to the JSDOM
    render(<RestaurantCardSpeedy resData={MOCK_DATA}/>);

    // querying
    const withSpeedy = screen.getByText("Speedy");

    // assertion
    expect(withSpeedy).toBeInTheDocument();

});