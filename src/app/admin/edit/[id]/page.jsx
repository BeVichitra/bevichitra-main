import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import EditBlogForm from "@/components/admin/EditBlogForm";

async function getBlog(id) {
  const client = await clientPromise;
  const db = client.db("blogDB");

  const blog = await db.collection("blogs").findOne({
    _id: new ObjectId(id),
  });

  return blog;
}

export default async function EditPage({ params }) {

  const { id } = await params;

  const blog = await getBlog(id);

  if (!blog) {
    return (
      <main className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-xl font-bold">Blog not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-6">
      <EditBlogForm blog={JSON.parse(JSON.stringify(blog))} />

    </main>
  );
}