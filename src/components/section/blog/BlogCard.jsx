import Image from "next/image";
import Link from "next/link";
import { authors } from "@/data/authors";

export default function BlogCard({ blog }) {

  const author = authors[blog.author];

  return (

    <Link href={`/blogs/${encodeURIComponent(blog.slug)}`}>

      <article className="group bg-(--bg-secondary)  border border-(--border-color) rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

        {/* IMAGE */}

        <div className="relative h-40 w-full overflow-hidden">

          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute top-3 left-3 bg-(--bg-main)/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium rounded-xl text-(--color-accent)">
            {blog.category}
          </span>

        </div>


        {/* CONTENT */}

        <div className="p-4">

          <h2 className="text-lg font-semibold leading-snug group-hover:text-orange-500 transition line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-(--text-muted) mt-2 text-sm line-clamp-2">
            {blog.excerpt}
          </p>


          {/* FOOTER */}

          <div className="flex items-center justify-between mt-4 text-xs text-(--text-secondary)">

            <div className="flex items-center gap-2">

              <div className="relative w-8 h-8 border-2 border-(--color-accent)/80 rounded-full">

                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="rounded-full object-cover p-0.5"
                />

              </div>

              <span className="font-medium text-(--text-secondary)">
                {author.name}
              </span>

            </div>

            <span>{blog.readTime}</span>

          </div>

        </div>

      </article>

    </Link>

  );
}