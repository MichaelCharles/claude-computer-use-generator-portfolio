const experiences = [
  {
    title: "Senior Engineer",
    company: "Maki (満喜株式会社)",
    period: "2022-present",
    description: [
      "Leading development efforts for TeamRise product",
      "Focusing on cloud-based solution modernization",
      "Implementing enterprise-level software development practices"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "S2",
    period: "2018-2022",
    description: [
      "Developed and maintained full-stack applications",
      "Implemented cloud-based solutions",
      "Contributed to enterprise software development"
    ]
  },
  {
    title: "English Teacher",
    company: "Akita, Japan",
    period: "2013-2018",
    description: [
      "Developed cross-cultural communication skills",
      "Built foundation for professional work in Japan",
      "Gained practical experience in educational technology"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Over a decade of experience in software development and cross-cultural collaboration
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="mt-4 ml-4 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};