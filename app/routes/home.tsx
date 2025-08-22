import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "An Awesome Portfolio" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Friendly Dev</h1>
    </>
  );
}
