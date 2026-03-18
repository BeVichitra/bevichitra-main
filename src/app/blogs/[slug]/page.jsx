import ReadingProgress from "@/components/section/blog/ReadingProgress";
import ShareButtons from "@/components/section/blog/ShareButtons";
import TableOfContents from "@/components/section/blog/TableOfContents";
import clientPromise from "@/lib/mongodb";
import { authors } from "@/data/authors";
import Image from "next/image";

async function getBlog(slug) {
  const client = await clientPromise;
  const db = client.db("blogDB");

  const blog = await db.collection("blogs").findOne({
    slug,
  });

  return blog;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="p-20 text-center text-[var(--text-muted)] flex justify-center items-center">
        Blog not found
      </div>
    );
  }

  const author = authors[blog.author];

  const headings = [];

  blog.content?.forEach((block, index) => {
    if (block.type === "section") {
      block.content?.forEach((item, i) => {
        if (item.type === "heading") {
          headings.push({
            id: `section-${index}-${i}`,
            text: item.text,
          });
        }
      });
    }
  });

  return (
    <main className="max-w-[1100px] mx-auto px-6 pt-36 pb-24">
      <ReadingProgress />

      {/* HERO HEADER */}

      <header className="max-w-5xl space-y-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--text-primary)]">
          {blog.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <div className="relative w-9 h-9">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          <span className="font-medium text-[var(--text-primary)]">
            {author.name}
          </span>

          <span>•</span>

          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>

          <span>•</span>

          <span>{blog.readTime}</span>
        </div>
      </header>

      {/* HERO IMAGE */}

      <div className="relative h-[300px] md:h-[360px] mt-10 rounded-2xl overflow-hidden border border-[var(--border-color)]">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* MOBILE TABLE OF CONTENTS */}

      {headings.length > 0 && (
        <div className="lg:hidden mt-10 border border-[var(--border-color)] rounded-xl bg-[var(--bg-main)] shadow-lg p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-4">
            Contents
          </h3>

          <TableOfContents headings={headings} />
        </div>
      )}

      {/* CONTENT GRID */}

      <div className="grid lg:grid-cols-[minmax(0,720px)_260px] gap-20 mt-16">
        {/* ARTICLE */}

        <article className="text-[17px] leading-7">
          {blog.content.map((block, index) => {
            if (block.type === "section") {
              return (
                <section key={index}>
                  {block.content?.map((item, i) => {
                    if (item.type === "heading") {
                      return (
                        <h2
                          key={i}
                          id={`section-${index}-${i}`}
                          className="text-2xl font-semibold text-[var(--text-primary)] mt-14 mb-4 scroll-mt-32"
                        >
                          {item.text}
                        </h2>
                      );
                    }

                    if (item.type === "paragraph") {
                      return (
                        <p
                          key={i}
                          className="mb-4 text-[var(--text-secondary)] text-justify"
                        >
                          {item.text}
                        </p>
                      );
                    }

                    if (item.type === "subheading") {
                      return (
                        <h3
                          key={i}
                          className="text-xl font-semibold mt-10 mb-3 text-[var(--text-primary)]"
                        >
                          {item.text}
                        </h3>
                      );
                    }

                    if (item.type === "bullet") {
                      return (
                        <ul
                          key={i}
                          className="list-disc pl-6 space-y-1.5 mb-5 text-[var(--text-secondary)]"
                        >
                          {item.items.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      );
                    }
                  })}
                </section>
              );
            }

            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-[var(--color-primary)] pl-5 italic text-[var(--text-secondary)] my-10 text-justify" >
                  {block.text}
                </blockquote>
              );
            }

            if (block.type === "image") {
              return (
                <img
                  key={index}
                  src={block.url}
                  alt={block.alt}
                  className="rounded-xl border border-[var(--border-color)] my-10"
                />
              );
            }
          })}
        </article>

        {/* SIDEBAR */}

        <aside className="hidden lg:block">
          <div className="sticky top-28 bg-[var(--bg-main)] shadow-lg border border-[var(--border-color)] rounded-xl py-6 px-8 ">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-4">
              Contents
            </h3>

            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>

      {/* TAGS */}

      <div className="max-w-3xl mt-20 border-t border-[var(--border-color)] pt-8">
        <h3 className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-4">
          Tags
        </h3>

        <div className="flex flex-wrap gap-3">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-[var(--bg-secondary)] rounded-full border border-[var(--border-color)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ShareButtons />
    </main>
  );
}
