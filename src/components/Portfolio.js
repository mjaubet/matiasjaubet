import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      image: '/project1.jpg',
      link: '#',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      image: '/project2.jpg',
      link: '#',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: '/project3.jpg',
      link: '#',
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Algunos de mis proyectos más destacados
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
