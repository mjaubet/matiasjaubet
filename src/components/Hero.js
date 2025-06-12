import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Hola, soy Matías Jaubet
            </h1>
            <p className="text-xl text-gray-600">
              Desarrollador Web Full Stack especializado en crear experiencias
              digitales únicas y funcionales.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contactar
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Ver Portfolio
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/profile.jpg"
              alt="Matías Jaubet"
              fill
              className="rounded-lg object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
