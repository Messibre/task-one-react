import { screen } from "@testing-library/react";

import { renderApp } from "@/test/render-app";

describe("routing", () => {
  it("shows the home page at /", () => {
    renderApp("/");
    expect(
      screen.getByRole("heading", { name: "Your project is ready" }),
    ).toBeInTheDocument();
  });

  it("shows a not-found page for an unknown address", () => {
    renderApp("/does-not-exist");
    expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
  });

  it("marks the current page in the navigation", () => {
    renderApp("/");
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});
