const LayoutCategories = () => {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="text-white">Layout & Categories</h1>
        <p className="text-dark-100">
          Select product group and categories from here
        </p>
      </div>

      <div className="w-full p-8 space-y-4 rounded md:col-span-2 bg-dark-350">
        {/* layout */}
        <div className="w-full">
          <label
            htmlFor="layout"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Layout
          </label>
          <select
            {...register("layout")}
            id="layout"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded outline-none border-dark-200 focus:border-primary dark:text-white"
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
            htmlFor="categories"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Category
          </label>

          {/* categories list */}
          <select
            {...register("categories")}
            id="categories"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded outline-none border-dark-200 focus:border-primary dark:text-white"
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
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Tags
          </label>
          <select
            {...register("tags")}
            id="tags"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded outline-none border-dark-200 focus:border-primary dark:text-white"
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
