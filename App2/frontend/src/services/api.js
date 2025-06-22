// Placeholder for api service
export const api = {};

export async function registerUser({ email, password, role }) {
  const res = await fetch("http://localhost:8080/api/register/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role }),
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}

export async function registerStudent(studentData) {
  const res = await fetch("http://localhost:8080/api/register/student", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.text();
}

export async function registerTeacher(teacherData) {
  const res = await fetch("http://localhost:8080/api/register/teacher", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(teacherData),
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.text();
}

export async function checkEmailExists(email) {
  const res = await fetch(
    `http://localhost:8080/api/register/check-email?email=${encodeURIComponent(
      email
    )}`
  );
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}

export async function login({ email, password }) {
  const res = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}
