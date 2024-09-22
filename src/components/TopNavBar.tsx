import Link from 'next/link';
import SearchBar from './SearchBar';

const TopNavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center ml-2">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Portfolio</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            {/* <Link href="/research" className="nav-link">Research</Link> */}
            <Link href="/publications" className="nav-link">Publications</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>
          {/* <SearchBar /> */}
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;