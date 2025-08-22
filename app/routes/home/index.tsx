import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'The Friendly Dev | Welcome' }, { name: 'description', content: 'An Awesome Portfolio' }];
}

export default function Home() {
  return (
    <section>
      <h1>Friendly Dev</h1>
    </section>
  );
}
