import Link from "next/link";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";
import LogOut from "./LogOut";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  return res.json();
}

export default async function AdminPage() {
  const blogs = await getBlogs();

  return (
    <main className="max-w-6xl mx-auto py-16 mt-20 px-6">
      {/* TOP BAR */}
      <div className="flex flex-col gap-4 mb-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Blog Dashboard
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage, edit and track your content
          </p>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <span className="text-sm text-gray-500">{blogs.length} blogs</span>

          <LogOut />
        </div>
      </div>

      {/* ACTION BAR */}
      <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-lg font-semibold text-gray-700">All Blogs</h2>

        <Link
          href="/admin/create"
          className="w-full sm:w-auto text-center px-5 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg font-medium"
        >
          + New Blog
        </Link>
      </div>

      {/* EMPTY STATE */}
      {blogs.length === 0 && (
        <div className="border rounded-2xl p-14 text-center bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">No blogs yet</h2>
          <p className="text-gray-500 mb-6">
            Start building your content empire 🚀
          </p>

          <Link
            href="/admin/create"
            className="px-5 py-2.5 bg-black text-white rounded-lg"
          >
            Create Your First Blog
          </Link>
        </div>
      )}

      {/* BLOG LIST */}
      <div className="space-y-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-2xl p-5 bg-white shadow-sm space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0 hover:shadow-md transition"
          >
            {/* CONTENT */}
            <div className="space-y-2">
              <h2 className="font-semibold text-base sm:text-lg leading-snug">
                {blog.title}
              </h2>

              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                  {blog.category}
                </span>

                <span>by {blog.author}</span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-6 pt-2 border-t sm:border-none sm:pt-0">
              <Link
                href={`/admin/edit/${blog._id}`}
                className="text-sm font-medium text-blue-600"
              >
                Edit
              </Link>

              <DeleteBlogButton id={blog._id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
