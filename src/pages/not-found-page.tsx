import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">
        That address does not match any page. Check the URL or go back home.
      </p>
      <Button asChild variant="outline">
        <Link to="/">Go to home</Link>
      </Button>
    </div>
  );
}
