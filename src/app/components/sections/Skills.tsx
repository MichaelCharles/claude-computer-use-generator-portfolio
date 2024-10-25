interface SkillCategory {
  title: string;
  skills: string[];
  icon: string; // We'll use emoji as placeholders, but you could replace these with proper icons
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS Serverless Development",
      "Cloud Architecture Design",
      "Infrastructure as Code",
      "Monitoring as Code"
    ],
    icon: "☁️"
  },
  {
    title: "Languages & Frameworks",
    skills: [
      "TypeScript, C#, JavaScript, Go",
      "Flutter, Dart, React Native",
      "React, Next.js, Redux, Elm",
      "PHP/Laravel, Kotlin"
    ],
    icon: "💻"
  },
  {
    title: "Databases & Storage",
    skills: [
      "MySQL, MongoDB",
      "DynamoDB, Cloudant",
      "MariaDB, PostgreSQL",
      "AWS S3"
    ],
    icon: "🗄️"
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git, Sensu, Sentry",
      "CI/CD Pipelines",
      "Atlassian Suite",
      "Monitoring Tools"
    ],
    icon: "🔧"
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4 text-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-center before:content-['•'] before:mr-2 before:text-blue-500"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}