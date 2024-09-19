import Link from 'next/link';
import SearchBar from './SearchBar';

const TopNavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center ml-2">
            <Link href="/" className="text-xl font-bold">Portofolio</Link>
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