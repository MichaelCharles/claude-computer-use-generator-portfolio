const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS Serverless Development",
      "Cloud Architecture Design",
      "Infrastructure as Code",
      "Monitoring as Code"
    ]
  },
  {
    title: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "C#",
      "JavaScript",
      "Go",
      "Flutter",
      "Dart",
      "React Native",
      "React",
      "Next.js",
      "Redux",
      "Elm",
      "PHP/Laravel",
      "Kotlin"
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Cloudant",
      "MariaDB",
      "PostgreSQL",
      "AWS S3"
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "Sensu",
      "Sentry",
      "CI/CD Pipelines",
      "Atlassian Suite"
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            A comprehensive toolkit for modern software development
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};