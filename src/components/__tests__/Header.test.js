import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// test case 1
it("Should render header component with login button", () => {
  // render the Header component to the JSDOM
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // querying
  // const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });

  // assertion
  expect(loginButton).toBeInTheDocument();
});


// test case 2
it("Shold render header component with Cart items 0", () => {
  // render the Header component to the JSDOM
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // querying
  // const cartItems = screen.getByText("Cart: 0 items");
  // using regex
  const cartItems = screen.getByText(/Cart/);

  // assertion
  expect(cartItems).toBeInTheDocument();
});


// test case 3
it("Shold render header component with Cart", () => {
  // render the Header component to the JSDOM
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // querying
  // using regex
  const cartItems = screen.getByText(/Cart/);

  // assertion
  expect(cartItems).toBeInTheDocument();
});


// test case 4
it("Should change Login Button to Logout on click", ()=> {
  // render the Header component to the JSDOM
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // querying
  const loginButton = screen.getByRole("button", {name: "Login"});
  // fire event
   fireEvent.click(loginButton);
   const logoutButton = screen.getByRole("button", {name: "Logout"});

  // assertion
  expect(logoutButton).toBeInTheDocument();
});



