interface SocialLink {
  platform: string;
  url: string;
  icon: string; // We'll use emoji as placeholders, but you could replace these with proper icons
}

const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/MichaelCharles",
    icon: "📝"
  },
  {
    platform: "Wantedly",
    url: "https://wantedly.com/id/michaelcharles",
    icon: "💼"
  },
  {
    platform: "TikTok",
    url: "https://tiktok.com/@michaelcharl.es",
    icon: "🎥"
  },
  {
    platform: "Email",
    url: "mailto:aubrey@michaelcharl.es",
    icon: "📧"
  }
];

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Let's Connect
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <span className="text-4xl mb-4">{link.icon}</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {link.platform}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Currently based in Akita, Japan
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Working on projects with a focus on the Japanese market
          </p>
        </div>
      </div>
    </section>
  )
}