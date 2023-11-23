import SingleProduct from "@/components/Home/SingleProduct/SingleProduct";
import { getProductById } from "@/utils/api/product";
import products from "@/data/ProductData"

const productsDetails = async ({ params }) => {
  
  // const productById = await getProductById(params?.id);
  const productById = products.find((item) => item._id === params.id)
  console.log(productById)
  return (
    <>
      <SingleProduct productById={productById} />
    </>
  );
};

export default productsDetails;
