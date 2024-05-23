const MarketplaceCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center px-6">
      {marketplace.map((e) => (
        <div
          key={e}
          className="flex flex-col items-center w-full gap-2 py-8 transition-all duration-300 rounded-sm cursor-pointer dark:bg-dark-400 group hover:scale-105"
        >
          <img
            src="/assets/images/marketplace.png"
            alt=""
            className="w-[80px] h-[80px] rounded"
          />
          <p className="text-sm cursor-pointer text-light-100 group-hover:text-primary">
            {e}
          </p>
          <p className="text-sm text-dark-100">0 Products</p>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceCard;

const marketplace = [
  "ThemeHub",
  "ThemeVille",
  "ThemeGalaxy",
  "ThemeForge",
  "ThemeNest",
  "ThemePlaza",
  "ThemeJunction",
  "ThemeHarbor",
];
