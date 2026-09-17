import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/realisations")({
  component: Layout,
});

function Layout() {
  return <Outlet />;
}
