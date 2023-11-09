import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-10 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link className="btn items-center fixed right-56" href="/">
          Home
        </Link>
        <Link className="btn items-center fixed right-28" href="/mytasks">
          My Tasks
        </Link>
        <Link className="btn items-center fixed right-4" href="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
