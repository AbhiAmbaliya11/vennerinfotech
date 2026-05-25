// Uses Web Crypto API — works in both Edge Runtime (middleware) and Node.js (API routes)

async function computeToken() {
  const encoder = new TextEncoder();
  const raw = `${process.env.ADMIN_PASSWORD}:${process.env.ADMIN_SECRET}`;
  const data = encoder.encode(raw);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyAdminToken(token) {
  if (!token) return false;
  const expected = await computeToken();
  return token === expected;
}

export { computeToken };
