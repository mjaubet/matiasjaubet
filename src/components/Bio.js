export default function Bio() {
  return (
    <section
      id="bio"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Sobre Mí
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Biografía
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Soy un desarrollador web apasionado con experiencia en la creación
              de sitios web y aplicaciones modernas. Mi enfoque se centra en
              crear soluciones digitales que no solo sean visualmente
              atractivas, sino también funcionales y eficientes. Me especializo
              en WordPress, Next.js y desarrollo frontend, siempre buscando las
              mejores prácticas y las tecnologías más actuales para ofrecer
              resultados excepcionales.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Experiencia
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  Desarrollador Web Full Stack
                </h4>
                <p className="text-gray-600">
                  Desarrollo de sitios web y aplicaciones web personalizadas
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  Especialista en WordPress
                </h4>
                <p className="text-gray-600">
                  Creación y personalización de sitios web con WordPress
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  Desarrollador Frontend
                </h4>
                <p className="text-gray-600">
                  Maquetación y desarrollo de interfaces web modernas
                </p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="/cv.pdf"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
