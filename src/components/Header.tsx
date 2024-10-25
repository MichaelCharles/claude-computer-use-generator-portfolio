import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Michael Charles Aubrey
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</Link>
            <Link href="/#experience" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Experience</Link>
            <Link href="/#skills" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Skills</Link>
            <Link href="/#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};