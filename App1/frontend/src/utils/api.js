// Utility for API requests with JWT
export async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");
  const headers = options.headers || {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(url, { ...options, headers });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
