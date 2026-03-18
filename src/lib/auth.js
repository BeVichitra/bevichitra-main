import crypto from "crypto";

const SECRET = process.env.AUTH_SECRET || "supersecret";

// create signature
export function sign(value) {
  return crypto
    .createHmac("sha256", SECRET)
    .update(value)
    .digest("hex");
}

// verify signature
export function verify(value, signature) {
  const expected = sign(value);
  return expected === signature;
}