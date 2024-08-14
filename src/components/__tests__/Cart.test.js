import { act } from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import appStore from "../../redux/appStore";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load the cart component and check the cart items", async () => {
  // render the component to the JSDOM
  await act(async () => render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  ));

  // querying to get accodion header to click
  const accodionHeader = screen.getByText("Burgers (17)");

  // fire event to click accodionHeader
  fireEvent.click(accodionHeader);

  // querying to get foodItems
  const foodItems = screen.getAllByTestId("foodItems");

  console.log(foodItems.length);

  // assertion
  expect(foodItems.length).toBe(17);


  // checking cart has 0 items initially
  // querying to find the cart items
  const cartItemsBefore = screen.getByText("Cart: 0 items");

  // assertion
  expect(cartItemsBefore).toBeInTheDocument();

  // checking after adding one item to the cart

  // fire event to click accodionHeader
  fireEvent.click(accodionHeader);

  // querying to get the add button
  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  // click on the add button of first product
  fireEvent.click(addBtns[0]);

  // querying to get the cart items after the click
  const cartItemsAterClick = screen.getByText("Cart: 1 items");

  // assertion
  expect(cartItemsAterClick).toBeInTheDocument();

  // checking after adding two items to the cart
    // fire event to click accodionHeader
  fireEvent.click(accodionHeader);

  // first product already added in the previous test case
  fireEvent.click(addBtns[1]);

  // querying to get the cart items after the click
  const cartItemsAterTwoClick = screen.getByText("Cart: 2 items");

  // assertion
  expect(cartItemsAterTwoClick).toBeInTheDocument();

  // getting food items after adding 2 itesm
  const foodItemsAfter = screen.getAllByTestId("foodItems");

  // console.log('foodItems', foodItems);
  console.log(foodItemsAfter.length);

  // assertion
  expect(foodItemsAfter.length).toBe(19);


  // checking clear cart
  // querying to get clear cart button
  const clearCart = screen.getByRole("button", {name: "Clear Cart"});
  
  // click on clearCart button
  fireEvent.click(clearCart);

  // assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  expect(screen.getByText("Cart is empty, Add items to the cart")).toBeInTheDocument();


});




// afterEach(() => {
//   // console.log('Before each in the cart called');
//   jest.clearAllMocks();
//   cleanup();
// });

// it("Should load Restaurant Menu Component", async () => {
//   // render the RestaurantMenu component to the JSDOM
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//           <RestaurantMenu />
//         </Provider>
//       </BrowserRouter>
//     )
//   );

//   // querying to get accodion header to click
//   const accodionHeader = screen.getByText("Burgers (17)");

//   // fire event to click accodionHeader
//   fireEvent.click(accodionHeader);

//   // querying to get foodItems
//   const foodItems = screen.getAllByTestId("foodItems");

//   console.log(foodItems.length);

//   // assertion
//   expect(foodItems.length).toBe(17);
// });

// // test case 2
// it("Should render cart items before click", () => {
//   // render the component to the JSDOM
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   // querying to find the cart items
//   const cartItemsBefore = screen.getByText("Cart: 0 items");

//   // assertion
//   expect(cartItemsBefore).toBeInTheDocument();
// });

// // test case 3
// it("Should render cart items after one click", async () => {
//   // render the component to the JSDOM
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//           <RestaurantMenu />
//         </Provider>
//       </BrowserRouter>
//     )
//   );

//   // querying to get accodion header to click
//   const accodionHeader = screen.getByText("Burgers (17)");

//   // fire event to click accodionHeader
//   fireEvent.click(accodionHeader);

//   // querying to get the add button
//   const addBtns = screen.getAllByRole("button", { name: "Add +" });

//   // click on the add button of first product
//   fireEvent.click(addBtns[0]);

//   // querying to get the cart items after the click
//   const cartItemsAterClick = screen.getByText("Cart: 1 items");

//   // assertion
//   expect(cartItemsAterClick).toBeInTheDocument();
// });

// // test case 4
// it("Should render 2 cart items after 2 click", async () => {
//   // render the component to the JSDOM
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//           <RestaurantMenu />
//         </Provider>
//       </BrowserRouter>
//     )
//   );

//   // querying to get accodion header to click
//   const accodionHeader = screen.getByText("Burgers (17)");

//   // fire event to click accodionHeader
//   fireEvent.click(accodionHeader);

//   // querying to get the add button
//   const addBtns = screen.getAllByRole("button", { name: "Add +" });

//   // first product already added in the previous test case
//   fireEvent.click(addBtns[1]);

//   // querying to get the cart items after the click
//   const cartItemsAterClick = screen.getByText("Cart: 2 items");

//   // assertion
//   expect(cartItemsAterClick).toBeInTheDocument();
// });

// // test case 5
// it("Should check howmany items in the cart", async () => {
//   // render the component to the JSDOM
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//           <RestaurantMenu />
//           <Cart />
//         </Provider>
//       </BrowserRouter>
//     )
//   );

//   // querying
//   const foodItems = screen.getAllByTestId("foodItems");

//   // console.log('foodItems', foodItems);
//   console.log(foodItems.length);

//   // assertion
//   expect(foodItems.length).toBe(19);

// });
