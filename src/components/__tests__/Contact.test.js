import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case", () => {
  // test case 1
  test("Should load contact us component", () => {
    // render the component to JSDOM
    render(<Contact />);

    // querying
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
  });

  // test case 2
  test("Should load button in the Contact commponent", () => {
    // render the component to JSDOM
    render(<Contact />);

    // querying
    const button = screen.getByText("Submit");

    // assertion
    expect(button).toBeInTheDocument();
  });

  // test case 3
  test("Should load name input name inside the contact component", () => {
    // render the component to JSDOM
    render(<Contact />);

    // querying
    const name = screen.getByPlaceholderText("name");

    // assertion
    expect(name).toBeInTheDocument();
  });

  // test case 4
  test("Should load 2 input boxes on the Contact component", () => {
    // render the component JSDOM
    render(<Contact />);

    // querying
    // whenever there are multiple items we need use getAll
    const inputBoxes = screen.getAllByRole("textbox");

    // log the JSX Element or React Element or virtual DOM Object or React Fiber node
    console.log(inputBoxes);

    // assertion
    expect(inputBoxes.length).toBe(2);
  });
});
