import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
  onClick: jest.fn(),
};
const testProps: ButtonProps = {
  btnType: ButtonType.Primay,
  size: ButtonSize.Large,
  className: "klass",
};
const disabledProps: ButtonProps = {
  disabled: true,
};

// test("dummy test", () => {
//   render(<Button>Hello</Button>);
//   const element = screen.queryByText("Hello");
//   expect(element).toBeTruthy();
//   expect(element).toBeInTheDocument();
// });

describe("test Button component", () => {
  it("should render the correct default button", () => {
    render(<Button {...defaultProps}>Hello</Button>);
    const element = screen.getByText("Hello") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeFalsy();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    render(<Button {...testProps}>Hello</Button>);
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg klass");
  });
  it("should render a link when btnType equals link and href is provided", () => {
    render(
      <Button btnType={ButtonType.Link} href="https://google.ca">
        Link
      </Button>
    );
    const element = screen.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    render(<Button {...disabledProps}>Disabled</Button>);
    const element = screen.getByText("Disabled") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
