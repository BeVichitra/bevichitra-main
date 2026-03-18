export const blogs = [
  {
    title: "Why 90% of Brands Look the Same and How a Strong Brand Identity Breaks the Pattern",

    slug: "why-90-percent-brands-look-the-same",

    excerpt:
      "In a crowded digital world, many brands end up looking identical. Discover why this happens and how a strong brand identity helps companies stand out.",

    coverImage: "/images/blog1.webp",

    category: "Brand Identity",

    author: {
      name: "Rahul Prajapati",
      avatar: "/images/logoIcon.png",
    },

    publishedAt: "March 12, 2026",

    readTime: "6 min read",

    tags: [
      "Brand Identity",
      "Branding Strategy",
      "Design",
      "Marketing",
      "Business",
    ],

    content: [
      {
        type: "paragraph",
        text: "Visit your social media feed, go to a few websites or walk down the row of startup booths at an event. Eventually, something begins to feel familiar. Many brands today end up looking almost identical."
      },

      {
        type: "paragraph",
        text: "The logos are minimal, the colors feel similar, the typography is clean and modern yet strangely familiar, and the visuals often come from the same pool of stock imagery."
      },

      {
        type: "heading",
        text: "The Rise of Template Brands"
      },

      {
        type: "paragraph",
        text: "In today’s digital world, starting a brand is easier than ever before. Design tools, website builders, and ready-made templates allow businesses to launch quickly."
      },

      {
        type: "paragraph",
        text: "For startups and small businesses this accessibility is extremely helpful. At the same time it has created something many designers call template branding."
      },

      {
        type: "image",
        url: "/images/demo.jpg",
        alt: "Template branding concept"
      },

      {
        type: "heading",
        text: "Why 90% of Brands Look the Same"
      },

      {
        type: "heading",
        text: "1. Trend Driven Design"
      },

      {
        type: "paragraph",
        text: "Design trends spread quickly. When a certain style becomes popular, many brands adopt it almost immediately. We have seen waves such as flat design, gradient backgrounds, minimal logos and rounded typography."
      },

      {
        type: "heading",
        text: "2. Lack of Brand Strategy"
      },

      {
        type: "paragraph",
        text: "Another common reason brands look similar is the absence of strategy. Many businesses start with a logo before they truly understand their brand."
      },

      {
        type: "heading",
        text: "3. Over Reliance on Templates"
      },

      {
        type: "paragraph",
        text: "Templates help businesses move faster and reduce costs, but they can also lead to visual repetition. Two completely different companies might choose the same template and only change colors or text."
      },

      {
        type: "heading",
        text: "4. Fear of Standing Out"
      },

      {
        type: "paragraph",
        text: "Sometimes brands avoid bold identity choices because they worry about being too different. But the brands people remember rarely play it safe."
      },

      {
        type: "heading",
        text: "What Is a Strong Brand Identity"
      },

      {
        type: "paragraph",
        text: "A strong brand identity is not just a logo or color palette. It is the complete system that expresses who a brand is and what it represents."
      },

      {
        type: "quote",
        text: "People do not remember brands that look like everyone else. They remember the ones that feel different and genuine."
      },

      {
        type: "heading",
        text: "Summary"
      },

      {
        type: "paragraph",
        text: "In a world where countless brands compete for attention, blending in is rarely a winning strategy. The brands people remember are the ones that have the courage to break the pattern."
      }
    ]
  }
]

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}