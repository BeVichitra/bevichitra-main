"use client";

export default function DeleteBlogButton({ id }) {

  const handleDelete = async () => {

    const confirmDelete = confirm("Delete this blog?");
    if (!confirmDelete) return;

    await fetch("/api/blogs", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    location.reload();
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 text-sm"
    >
      Delete
    </button>
  );
}