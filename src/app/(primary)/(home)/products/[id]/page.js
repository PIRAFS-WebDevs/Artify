import SingleProduct from "@/components/Home/SingleProduct/SingleProduct";
import { getProductById } from "@/utils/api/product";

const productsDetails = async ({ params }) => {
  const productById = await getProductById(params.id);

  return <SingleProduct productById={productById.data} />;
};

export default productsDetails;
