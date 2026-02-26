type UserRole = "admin" | "editor" | "viewer";

type User = {
  name: string;
  role: UserRole;
};

function assignRole(user: User) {
  console.log(`${user.name} is assigned as ${user.role}`);
}

const user1: User = {
  name: "Abheek",
  role: "admin",
};

assignRole(user1);