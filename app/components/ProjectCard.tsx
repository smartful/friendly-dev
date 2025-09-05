import { Link } from 'react-router';
import type { Project } from '~/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block transform transition duration-300 hover:scale-[1.02]">
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
        <div className="p-5">
          <h3 className="text-3xl font-semibold text-blue-400 mb-1">{project.title}</h3>
          <div className="p text-sm text-gray-300 mb-2">{project.description}</div>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
