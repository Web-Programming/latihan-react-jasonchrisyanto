import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 max-w-md w-full rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-100 mb-6 text-center">
          Welcome to My Dashboard
        </h1>
        <ul className="space-y-3 text-lg">
          <li>
            <span className="font-medium text-indigo-600">Nama:</span> Jason Chrisyanto
          </li>
          <li>
            <span className="font-medium text-indigo-600">NPM:</span> 2327250027
          </li>
        </ul>
        <div className="mt-6 text-center">
          <Link href="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

