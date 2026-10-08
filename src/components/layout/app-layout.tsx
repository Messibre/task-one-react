import { NavLink, Outlet } from "react-router";

import { cn } from "@/lib/utils";

const links = [{ to: "/", label: "Home", end: true }];

export function AppLayout() {
  return (
    <div className="min-h-svh">
      <header className="border-b">
        <nav
          aria-label="Main"
          className="mx-auto flex h-14 max-w-3xl items-center gap-1 px-4"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                  isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
