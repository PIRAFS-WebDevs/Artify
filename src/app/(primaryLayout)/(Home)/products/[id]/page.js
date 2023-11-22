import SingleProduct from "@/components/Home/SingleProduct/SingleProduct";
import { getProductById } from "@/utils/api/product";

const productsDetails = async ({ params }) => {
  console.log("🚀 ~ file: page.js:5 ~ productsDetails ~ params:", params);
  const productById = await getProductById(params?.id);
  console.log(
    "🚀 ~ file: page.js:5 ~ productsDetails ~ productById:",
    productById
  );
  return (
    <>
      <SingleProduct productById={productById} />
    </>
  );
};

export default productsDetails;
