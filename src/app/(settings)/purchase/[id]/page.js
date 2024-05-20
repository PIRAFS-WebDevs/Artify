import PurchaseDetails from "@/components/Settings/Purchase/PurchaseDetails";

const PurchaseDetailsPage = ({ params }) => {
  return (
    <>
      <PurchaseDetails id={params.id} />
    </>
  );
};

export default PurchaseDetailsPage;
