import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

test("button test", () => {
  const view = render(<Button>Hello</Button>);
  const element = view.queryByText("Hello");
  expect(element).toBeTruthy();
});
