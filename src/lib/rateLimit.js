const requests = new Map();

export function rateLimit(ip, limit = 5, windowMs = 60000) {
  const now = Date.now();

  if (!requests.has(ip)) {
    requests.set(ip, []);
  }

  const timestamps = requests.get(ip).filter(
    (t) => now - t < windowMs
  );

  timestamps.push(now);
  requests.set(ip, timestamps);

  if (timestamps.length > limit) {
    return false;
  }

  return true;
}