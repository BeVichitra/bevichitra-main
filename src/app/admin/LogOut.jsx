"use client";

export default function LogOut() {

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    window.location.href = "/admin/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-(--bg-secondary) text-(--text-primary) px-2 py-2 rounded-lg hover:bg-gray-600 hover:text-white"
    >
      Logout
    </button>
  );
}