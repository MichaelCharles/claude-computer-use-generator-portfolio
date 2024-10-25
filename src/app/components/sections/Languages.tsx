interface Language {
  name: string;
  level: string;
  description?: string;
}

const languages: Language[] = [
  {
    name: "English",
    level: "Native",
    description: "Native speaker with extensive technical writing experience"
  },
  {
    name: "Japanese",
    level: "Business",
    description: "Business-level proficiency, technical writing capabilities"
  }
];

export default function Languages() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="languages">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language.name}
                </h3>
                <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  {language.level}
                </span>
              </div>
              {language.description && (
                <p className="text-gray-600 dark:text-gray-400">
                  {language.description}
                </p>
              )}
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Actively writes technical content in both languages
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}