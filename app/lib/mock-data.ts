export const users = [
  { id: 1, name: "Ly Nguyen", email: "ly@example.com", role: "Admin" },
  { id: 2, name: "Anh Nguyen", email: "anh@example.com", role: "User" },
  { id: 3, name: "Huong Nguyen", email: "huong@example.com", role: "User" },
  { id: 4, name: "Tuan Nguyen", email: "tuan@example.com", role: "User" },
  { id: 5, name: "Duong Nguyen", email: "duong@example.com", role: "User" },
];

// Delay is similar to fetching a database
export async function fetchUsers() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return users;
}
