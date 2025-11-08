const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.JPG"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Hey, I am Rémi 👋</h1>
          <p className="text-gray-300 text-lg">
            Avec près de 10 ans d'expérience en développement web, je suis spécialisé dans la conception d'applications
            performantes et intuitives, principalement en React JS et JavaScript.
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Mes missions</h2>
        <p className="text-gray-300 leading-relaxed">
          Je suis motivé par des projets ayant un impact réel, et je cherche à contribuer à des équipes qui partagent
          cette même vision.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">Tech que j'utilise</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {['React JS', 'TypeScript', 'Next JS', 'Tailwind CSS', 'Node JS', 'Drizzle', 'PostgreSQL', 'Docker'].map(
          (tech) => (
            <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
              {tech}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default AboutPage;
