import { FaGithub, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/MichaelCharles',
    icon: FaGithub
  },
  {
    name: 'Wantedly',
    url: 'https://wantedly.com/id/michaelcharles',
    text: 'Wantedly'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@michaelcharl.es',
    icon: FaTiktok
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Connect with me on social media or send me an email
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <a
              href="mailto:aubrey@michaelcharl.es"
              className="text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              aubrey@michaelcharl.es
            </a>

            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  {link.icon ? (
                    <link.icon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <span className="text-lg font-medium">{link.text}</span>
                  )}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};