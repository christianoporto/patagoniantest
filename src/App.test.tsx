import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders React Wahio Title", () => {
    const { getAllByText } = render(<App />);
    const linkElement = getAllByText(/React Wahio/i);
    expect(linkElement[0].id).toBe("title");
});
