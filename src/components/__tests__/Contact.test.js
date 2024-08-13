import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case", () => {

  // // executed before all the test cases (before first test case)
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // // executed before each test case
  // beforeEach(() => {
  //   console.log("Before Each");
  // });


  // // executed after the all the test cases
  // afterAll(() => {
  //   console.log("After All");
  // });

  // // executed after each test case
  // AfterEach(() => {
  //   console.log("After Each");
  // })

  // test case 1
  it("Should load contact us component", () => {
    // render the component to JSDOM
    render(<Contact />);

    // querying
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
  });

  // test case 2
  it("Should load button in the Contact commponent", () => {
    // render the component to JSDOM
    render(<Contact />);

    // querying
    const button = screen.getByText("Submit");

    // assertion
    expect(button).toBeInTheDocument();
  });

  // test case 3
  it("Should load name input name inside the contact component", () => {
    // render the component to JSDOM
    render(<Contact />);

    // querying
    const name = screen.getByPlaceholderText("name");

    // assertion
    expect(name).toBeInTheDocument();
  });

  // test case 4
  it("Should load 2 input boxes on the Contact component", () => {
    // render the component JSDOM
    render(<Contact />);

    // querying
    // whenever there are multiple items we need use getAll
    const inputBoxes = screen.getAllByRole("textbox");

    // log the JSX Element or React Element or virtual DOM Object or React Fiber node
    // console.log(inputBoxes);

    // assertion
    expect(inputBoxes.length).toBe(2);
  });
});
