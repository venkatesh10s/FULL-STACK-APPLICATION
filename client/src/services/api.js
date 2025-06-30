const API_BASE = "http://localhost:5000/api";

export const registerUser = async (form) => {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Registration failed");
  return await res.json();
};

export const loginUser = async (form) => {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Login failed");
  return await res.json();
};
