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

  it("verifies the 'Settings' navigation link renders with active aria-current=\"page\" state when at the /settings route", () => {
    renderApp("/settings");
    expect(screen.getByRole("link", { name: "Settings" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("verifies navigating to the /settings route renders the placeholder SettingsPage component without throwing a 404 error", () => {
    renderApp("/settings");
    expect(screen.getByRole("heading", { name: "Settings" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Page not found" }),
    ).not.toBeInTheDocument();
  });
});
