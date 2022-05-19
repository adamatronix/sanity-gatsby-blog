export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6285acefbc99690e86b9c610",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7a1bcd88",
                  apiId: "00d5b9eb-f880-4877-8deb-3170aec490af",
                },
                {
                  buildHookId: "6285acf009e86109cd1e1cfa",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-j2mgm5rg",
                  apiId: "98f97477-1569-4b8a-bda6-b72c275ff274",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/adamatronix/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-j2mgm5rg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
