interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Engineer",
    company: "Maki (満喜株式会社)",
    period: "2022-present",
    points: [
      "Leading development efforts for TeamRise product",
      "Focusing on cloud-based solution modernization",
      "Implementing enterprise-level software development practices"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "S2",
    period: "2018-2022",
    points: [
      "Developed and maintained full-stack applications",
      "Implemented cloud-based solutions",
      "Contributed to enterprise software development"
    ]
  },
  {
    title: "English Teacher",
    company: "Akita, Japan",
    period: "2013-2018",
    points: [
      "Developed cross-cultural communication skills",
      "Built foundation for professional work in Japan",
      "Gained practical experience in educational technology"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-600 transform -translate-x-1/2"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-5/12">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}