import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders Vite + React heading", () => {
    render(<App />);
    const headingElement = screen.getAllByRole("heading", { level: 1 }).at(0);
    expect(headingElement).toHaveTextContent(/Vite \+ React/i);
  });
});
