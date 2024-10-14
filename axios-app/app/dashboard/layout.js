import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <section>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-lg">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/dashboard" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
                  Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/users" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
                  Users
              </Link>
            </li>
            <li>
              <Link href="/dashboard/post" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
                  Input
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      {children}
    </section>
  );
}
