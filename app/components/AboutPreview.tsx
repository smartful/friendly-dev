import { Link } from 'react-router';

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
      <img
        src="/images/profile.JPG"
        alt="profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">À propos de moi</h2>
        <p className="text-gray-200 mb-4 max-w-4xl ">
          Avec près de 10 ans d'expérience en développement web, je suis spécialisé dans la conception d'applications
          performantes et intuitives, principalement en React JS et JavaScript.
        </p>
        <Link to={'/about'} className="inline-block"></Link>
      </div>
    </section>
  );
};

export default AboutPreview;
