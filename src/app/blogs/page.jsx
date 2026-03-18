import clientPromise from "@/lib/mongodb";
import BlogCard from "@/components/section/blog/BlogCard";
import Image from "next/image";
import Link from "next/link";

async function getBlogs() {

  const client = await clientPromise;
  const db = client.db("blogDB");

  const blogs = await db
    .collection("blogs")
    .find({})
    .sort({ publishedAt: -1 })
    .toArray();

  return blogs;

}

export default async function BlogPage() {

  const blogs = await getBlogs();
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (

    <main className="w-full">

      {/* HERO */}
      <section className="border-b border-(--border-color)">
        <div className="max-w-6xl mx-auto px-6 pb-14 pt-40 text-center">

          <h1 className="text-5xl font-bold tracking-tight mb-5">
            Our Blogs
          </h1>

          <p className="text-(--text-muted) max-w-2xl mx-auto text-lg">
            Lorem ipsum dolorsit amet consectetur adipisicing elitCulpa, aliquam.
          </p>

        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-15">

        {blogs.length === 0 ? (

          <div className="text-center py-32">

            <h2 className="text-2xl font-semibold mb-4">
              No blogs yet
            </h2>

            <p className="text-(--text-secondary)">
              Blogs will appear here once published.
            </p>

          </div>

        ) : (

          <>
          
          {/* FEATURED BLOG */}

          {featured && (
            <Link href={`/blogs/${featured.slug}`}>
              <article className="mb-20 grid lg:grid-cols-2 gap-10 items-center group">

                <div className="relative h-[200px] lg:h-[300px] rounded-2xl overflow-hidden">

                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                <div>

                  <p className="text-sm text-(--text-muted) mb-3">
                    Latest Blog
                  </p>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:underline">
                    {featured.title}
                  </h2>

                  <p className="text-(--text-muted) mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>

                  <span className="text-sm font-medium">
                    Read Blog →
                  </span>

                </div>

              </article>
            </Link>
          )}


          {/* BLOG GRID */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {rest.map((blog) => (

              <BlogCard
                key={blog._id}
                blog={{
                  ...blog,
                  slug: blog.slug
                }}
              />

            ))}

          </div>

          </>

        )}

      </section>

    </main>

  );
}