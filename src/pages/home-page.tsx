import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Your project is ready</h1>
      <p className="max-w-prose text-muted-foreground">
        This is an empty starting point. Replace this page and add your own as you work
        through your tickets.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Where to start</CardTitle>
          <CardDescription>The files you will edit most often.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <code>src/pages</code> for pages, registered in{" "}
              <code>src/app/routes.tsx</code>
            </li>
            <li>
              <code>src/features</code> for a feature's API calls and hooks
            </li>
            <li>
              <code>src/stores</code> for browser-only state (Zustand)
            </li>
            <li>
              <code>src/components/ui</code> for shadcn/ui components
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
