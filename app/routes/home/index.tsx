import type { Route } from './+types/index';
import FeaturedProject from '~/components/FeaturedProject';
import AboutPreview from '~/components/AboutPreview';
import type { Project } from '~/types';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'The Friendly Dev | Welcome' }, { name: 'description', content: 'An Awesome Portfolio' }];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProject projects={projects} count={2} />
      <AboutPreview />
    </>
  );
};

export default HomePage;
