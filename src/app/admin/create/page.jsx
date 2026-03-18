"use client";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { calculateReadingTime } from "@/lib/utils/readingTIme";

function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children({ attributes, listeners })}
    </div>
  );
}

export default function CreateBlog() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "",
    author: "Rahul",
    tags: "",
    coverImage: "",
  });

  const [content, setContent] = useState([]);

  function generateSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm({
        ...form,
        title: value,
        slug: generateSlug(value),
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setContent((items) => {
        const oldIndex = active.id;
        const newIndex = over.id;

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const addInnerBlock = (sectionIndex, type) => {
    const updated = [...content];

    if (type === "heading") {
      updated[sectionIndex].content.push({
        type: "heading",
        text: "",
      });
    }

    if (type === "paragraph") {
      updated[sectionIndex].content.push({
        type: "paragraph",
        text: "",
      });
    }

    if (type === "subheading") {
      updated[sectionIndex].content.push({
        type: "subheading",
        text: "",
      });
    }

    if (type === "bullet") {
      updated[sectionIndex].content.push({
        type: "bullet",
        items: [""],
      });
    }

    setContent(updated);
  };

  const removeInnerBlock = (sectionIndex, innerIndex) => {
    const updated = [...content];
    updated[sectionIndex].content = updated[sectionIndex].content.filter(
      (_, i) => i !== innerIndex,
    );
    setContent(updated);
  };

  const addBlock = (type) => {
    if (type === "section") {
      setContent([
        ...content,
        {
          type: "section",
          content: [],
        },
      ]);
    }

    if (type === "image") {
      setContent([
        ...content,
        {
          type: "image",
          url: "",
          alt: "",
        },
      ]);
    }

    if (type === "quote") {
      setContent([
        ...content,
        {
          type: "quote",
          text: "",
        },
      ]);
    }
  };

  const updateBlock = (index, field, value) => {
    const updated = [...content];
    updated[index][field] = value;
    setContent(updated);
  };

  const removeBlock = (index) => {
    const updated = content.filter((_, i) => i !== index);
    setContent(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const readTime = calculateReadingTime(content);

    await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        readTime,
        coverImage: form.coverImage,
        tags: form.tags.split(",").map((t) => t.trim()),
        content,
      }),
    });

    router.push("/admin");
  };

  return (
    <main className="max-w-5xl mx-auto py-16 mt-20 px-6 space-y-10">
      <h1 className="text-4xl font-bold">Create Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* BLOG INFO */}
        <div className="bg-white border rounded-xl p-6 shadow-sm space-y-5">
          <h2 className="text-lg font-semibold">Blog Information</h2>

          <input
            name="title"
            placeholder="Blog title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />

          <input
            name="slug"
            placeholder="Slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />

          <textarea
            name="excerpt"
            placeholder="Excerpt"
            value={form.excerpt}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
        </div>

        {/* META */}
        <div className="bg-white border rounded-xl p-6 shadow-sm space-y-5">
          <h2 className="text-lg font-semibold">Metadata</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />

            <select
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            >
              <option value="Gaurav">Gaurav</option>
              <option value="Rahul">Rahul</option>
              <option value="Saurabh">Saurabh</option>
            </select>
          </div>

          <input
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
        </div>

        {/* COVER IMAGE */}
        <div className="bg-white border rounded-xl p-6 shadow-sm space-y-5">
          <h2 className="text-lg font-semibold">Cover Image</h2>

          <input
            type="file"
            onChange={async (e) => {
              const file = e.target.files[0];

              const formData = new FormData();
              formData.append("file", file);

              const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              });

              const data = await res.json();

              setForm({
                ...form,
                coverImage: data.url,
              });
            }}
          />

          {form.coverImage && (
            <img src={form.coverImage} className="rounded-lg max-h-60 border" />
          )}
        </div>

        {/* CONTENT BUILDER */}
        <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
          <h2 className="text-lg font-semibold">Content Builder</h2>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={content.map((_, i) => i)}
              strategy={verticalListSortingStrategy}
            >
              {content.map((block, index) => (
                <SortableItem key={index} id={index}>
                  {({ attributes, listeners }) => (
                    <div className="bg-gray-50 border rounded-xl p-5 space-y-4">
                      <div className="flex justify-between items-center">
                        <div
                          {...attributes}
                          {...listeners}
                          className="cursor-grab text-gray-400 hover:text-black select-none"
                        >
                          ⋮⋮
                        </div>

                        <span className="text-xs uppercase text-gray-500 font-semibold">
                          {block.type}
                        </span>

                        <button
                          type="button"
                          onClick={() => removeBlock(index)}
                          className="text-red-500 text-sm"
                        >
                          Delete
                        </button>
                      </div>

                      {block.type === "section" && (
                        <div className="space-y-4">
                          {block.content?.map((item, i) => (
                            <div
                              key={i}
                              className="bg-white border rounded-lg p-4 space-y-2"
                            >
                              {item.type === "heading" && (
                                <input
                                  value={item.text}
                                  placeholder="Heading"
                                  onChange={(e) => {
                                    const updated = [...content];
                                    updated[index].content[i].text =
                                      e.target.value;
                                    setContent(updated);
                                  }}
                                  className="w-full border border-gray-300 p-3 rounded-lg text-lg font-bold"
                                />
                              )}

                              {item.type === "paragraph" && (
                                <textarea
                                  value={item.text}
                                  onChange={(e) => {
                                    const updated = [...content];
                                    updated[index].content[i].text =
                                      e.target.value;
                                    setContent(updated);
                                  }}
                                  className="w-full border border-gray-300 p-3 rounded-lg"
                                />
                              )}

                              {item.type === "subheading" && (
                                <input
                                  value={item.text}
                                  onChange={(e) => {
                                    const updated = [...content];
                                    updated[index].content[i].text =
                                      e.target.value;
                                    setContent(updated);
                                  }}
                                  className="w-full border border-gray-300 p-3 rounded-lg font-semibold"
                                />
                              )}

                              {item.type === "bullet" && (
                                <textarea
                                  value={item.items.join("\n")}
                                  onChange={(e) => {
                                    const updated = [...content];
                                    updated[index].content[i].items =
                                      e.target.value.split("\n");
                                    setContent(updated);
                                  }}
                                  className="w-full border border-gray-300 p-3 rounded-lg"
                                />
                              )}

                              <button
                                type="button"
                                onClick={() => removeInnerBlock(index, i)}
                                className="text-red-500 text-xs"
                              >
                                Delete
                              </button>
                            </div>
                          ))}

                          <div className="flex gap-3 flex-wrap">
                            <button
                              type="button"
                              onClick={() => addInnerBlock(index, "heading")}
                              className="px-3 py-1 border rounded-lg text-sm"
                            >
                              + Heading
                            </button>

                            <button
                              type="button"
                              onClick={() => addInnerBlock(index, "paragraph")}
                              className="px-3 py-1 border rounded-lg text-sm"
                            >
                              + Paragraph
                            </button>

                            <button
                              type="button"
                              onClick={() => addInnerBlock(index, "subheading")}
                              className="px-3 py-1 border rounded-lg text-sm"
                            >
                              + Subheading
                            </button>

                            <button
                              type="button"
                              onClick={() => addInnerBlock(index, "bullet")}
                              className="px-3 py-1 border rounded-lg text-sm"
                            >
                              + Bullet
                            </button>
                          </div>
                        </div>
                      )}

                      {block.type === "quote" && (
                        <textarea
                          value={block.text}
                          onChange={(e) =>
                            updateBlock(index, "text", e.target.value)
                          }
                          className="w-full border border-gray-300 p-3 rounded-lg italic"
                        />
                      )}

                      {block.type === "image" && (
                        <div className="space-y-3">
                          <input
                            type="file"
                            onChange={async (e) => {
                              const file = e.target.files[0];

                              const formData = new FormData();
                              formData.append("file", file);

                              const res = await fetch("/api/upload", {
                                method: "POST",
                                body: formData,
                              });

                              const data = await res.json();

                              updateBlock(index, "url", data.url);
                            }}
                          />

                          {block.url && (
                            <img
                              src={block.url}
                              className="rounded-lg border max-h-60"
                            />
                          )}

                          <input
                            placeholder="Alt text"
                            value={block.alt}
                            onChange={(e) =>
                              updateBlock(index, "alt", e.target.value)
                            }
                            className="w-full border border-gray-300 p-3 rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => addBlock("section")}
              className="px-4 py-2 border rounded-lg"
            >
              + Section
            </button>

            <button
              type="button"
              onClick={() => addBlock("image")}
              className="px-4 py-2 border rounded-lg"
            >
              + Image
            </button>

            <button
              type="button"
              onClick={() => addBlock("quote")}
              className="px-4 py-2 border rounded-lg"
            >
              + Quote
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded-lg font-medium"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </main>
  );
}
