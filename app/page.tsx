import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Next.js Week 1</h1>
        <p className="text-gray-500 mb-8">Server vs Client Components</p>
        <div className="flex gap-4 justify-center">
          <Link href="/users" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Server Component →
          </Link>
          <Link href="/users/client" className="bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
            Client Component →
          </Link>
        </div>
      </div>
    </div>
  );
}
