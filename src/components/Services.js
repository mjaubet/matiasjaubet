export default function Services() {
  const services = [
    {
      name: 'WordPress',
      description: 'Desarrollo de sitios web y tiendas online con WordPress',
      icon: '🌐',
    },
    {
      name: 'Next.js',
      description: 'Aplicaciones web modernas y rápidas con Next.js',
      icon: '⚡',
    },
    {
      name: 'Maquetación Web',
      description: 'Diseño y maquetación de interfaces web responsivas',
      icon: '🎨',
    },
    {
      name: 'HTML, CSS, JavaScript',
      description: 'Desarrollo frontend con las tecnologías web fundamentales',
      icon: '💻',
    },
    {
      name: 'Shopify',
      description: 'Creación y personalización de tiendas online con Shopify',
      icon: '🛍️',
    },
    {
      name: 'GitHub',
      description: 'Control de versiones y colaboración en proyectos',
      icon: '📦',
    },
    {
      name: 'Figma',
      description: 'Diseño de interfaces y prototipos interactivos',
      icon: '✏️',
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Mis Servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones web completas para tu negocio
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <span className="text-4xl">{service.icon}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
