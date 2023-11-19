"use client";

const LayoutCategories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
      <div className="space-y-2">
        <h1 className="text-white">Layout & Categories</h1>
        <p className="text-dark-100">
          Select product group and categories from here
        </p>
      </div>

      <div className="md:col-span-2 w-full bg-dark-350 rounded p-8 space-y-4">
        {/* layout */}
        <div className="w-full">
          <label
            htmlFor="layout"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Layout
          </label>
          <select
            name="layout"
            id="layout"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          >
            {layouts.map((layout, i) => (
              <option key={i} value={layout} className="text-white bg-dark-300">
                {layout}
              </option>
            ))}
          </select>
        </div>

        {/* categories */}
        <div className="w-full">
          <label
            htmlFor="category"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Category
          </label>

          {/* categories list */}

          <select
            name="category"
            id="category"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          >
            {categories.map((category, i) => (
              <option
                key={i}
                value={category}
                className="text-white bg-dark-300"
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* tags */}
        <div className="w-full">
          <label
            htmlFor="tags"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Tags
          </label>
          <select
            id="tags"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          >
            {tags.map((tag, i) => (
              <option key={i} value={tag} className="text-white bg-dark-300">
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LayoutCategories;

const layouts = ["Fixed", "Responsive", "Fluid", "N/A"];

const categories = ["Shopify", "React Native", "Angular", "Vue", "N/A"];

const tags = [
  "Modern",
  "E-Commerce",
  "Dashboard",
  "Web Design",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];
