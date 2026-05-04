"use client";

import { useEffect, useState } from "react";
import { fetchUsers } from "@/app/lib/mock-data";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Users (Client Component)</h1>
        <p className="mt-1 text-sm text-gray-400">Data fetched on the client</p>

        <div className="mt-6 rounded-lg border border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-blue-600">
              <tr>
                <th className="px-4 py-3 text-left text-white">ID</th>
                <th className="px-4 py-3 text-left text-white">Name</th>
                <th className="px-4 py-3 text-left text-white">Email</th>
                <th className="px-4 py-3 text-left text-white">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td className="px-4 py-3">
                    <div className="h-4 w-6 bg-gray-700 rounded animate-pulse" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="h-4 w-32 bg-gray-700 rounded animate-pulse" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="h-4 w-48 bg-gray-700 rounded animate-pulse" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="h-6 w-16 bg-gray-700 rounded-full animate-pulse" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Users (Client Component)</h1>
      <p className="mt-1 text-sm text-gray-400">
        Data fetched on the client
      </p>

      <div className="mt-6 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-blue-600">
            <tr>
              <th className="px-4 py-3 text-left text-white">ID</th>
              <th className="px-4 py-3 text-left text-white">Name</th>
              <th className="px-4 py-3 text-left text-white">Email</th>
              <th className="px-4 py-3 text-left text-white">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-400">{user.id}</td>
                <td className="px-4 py-3 font-medium">{user.name}</td>
                <td className="px-4 py-3 text-gray-400">{user.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === "Admin"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
