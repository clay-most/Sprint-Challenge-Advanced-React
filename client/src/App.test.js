import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);

test("Check DarkMode", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/dark/i);
  expect(element).toBeVisible();
});
