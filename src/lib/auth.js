import crypto from "crypto";

const SECRET = process.env.AUTH_SECRET || "fallback_secret"


// ✅ create signature
export function sign(value) {
  return crypto
    .createHmac("sha256", SECRET)
    .update(value)
    .digest("hex");
}

// ✅ secure compare (prevents timing attacks)
export function verify(value, signature) {
  try {
    const expected = sign(value);

    if (!signature) return false;

    return crypto.timingSafeEqual(
      Buffer.from(expected),
      Buffer.from(signature)
    );
  } catch {
    return false;
  }
}