export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Michael Charles Aubrey
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8">
          Senior Engineer at Maki (満喜株式会社)
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Modernizing cloud-based solutions and leading development efforts for the TeamRise product
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}