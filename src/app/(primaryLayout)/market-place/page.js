import MarketplaceCard from "@/components/Marketplace/MarketplaceCard";
import MarketplaceHeader from "@/components/Marketplace/MarketplaceHeader";

const Marketplace = () => {
  return (
    <div className="p-8 space-y-8">
      <MarketplaceHeader />

      <MarketplaceCard />
    </div>
  );
};

export default Marketplace;
