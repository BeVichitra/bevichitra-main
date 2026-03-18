"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [locked, setLocked] = useState(false);
  const [timer, setTimer] = useState(0);

  // 🔥 countdown logic
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // unlock when timer ends
  useEffect(() => {
    if (timer === 0) {
      setLocked(false);
    }
  }, [timer]);

  const handleLogin = async () => {
    if (locked) return;

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      // 🔥 HANDLE RATE LIMIT
      if (res.status === 429) {
        setLocked(true);
        setTimer(30); // 30 sec lock
        setError("Too many attempts. Try again in 30 seconds.");
        return;
      }

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      router.push("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] px-4 pt-10 sm:pt-20">
      <div className="w-full max-w-md">
        {/* heading */}
        <h1 className="text-center text-[var(--text-primary)] text-2xl sm:text-3xl font-semibold mb-8">
          Welcome back
        </h1>

        {/* card */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] rounded-xl p-6 sm:p-8 shadow-sm">
          {/* logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logoIcon.png"
              width={70}
              height={70}
              alt="logo"
            />
          </div>

          {/* error */}
           {error && (
            <p className="text-[var(--color-primary)] text-sm text-center mb-4">
              {error}
            </p>
          )}

          <div className="space-y-4">
            {/* username */}
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full bg-[var(--bg-main)] border border-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] p-3 rounded-md outline-none focus:border-[var(--color-primary)] transition"
            />

            {/* password */}
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-[var(--bg-main)] border border-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] p-3 rounded-md outline-none focus:border-[var(--color-primary)] transition"
            />

            {/* button */}
            <button
              onClick={handleLogin}
              disabled={loading || locked}
              className="w-full bg-[var(--color-primary)] text-[var(--inner-text)] p-3 rounded-md font-medium transition hover:opacity-90 disabled:opacity-50"
            >
              {locked
                ? `Try again in ${timer}s`
                : loading
                  ? "Logging in..."
                  : "Login"}
            </button>
          </div>

          {/* footer */}
          <p className="text-center text-[var(--text-muted)] text-xs mt-6">
            Admin panel access
          </p>
        </div>
      </div>
    </div>
  );
}
