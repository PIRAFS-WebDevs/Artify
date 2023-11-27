import MarketplaceBanner from "@/components/Marketplace/MarketplaceBanner";
import MarketplaceCard from "@/components/Marketplace/MarketplaceCard";
import MarketplaceCard1 from "@/components/Marketplace/MarketplaceCard1";
import MarketplaceHeader from "@/components/Marketplace/MarketplaceHeader";
import OurMarketplace from "@/components/Marketplace/OurMarketplace";

const Marketplace = () => {
  return (
    <div className="p-6 space-y-6">
      <MarketplaceBanner />
      <OurMarketplace />
      <MarketplaceCard1 />
      {/* <MarketplaceHeader />
      <MarketplaceCard /> */}
    </div>
  );
};

export default Marketplace;
