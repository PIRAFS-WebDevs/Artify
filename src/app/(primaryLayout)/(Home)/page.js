import Card from "@/components/Home/Card/Card";
import CategorySplide from "@/components/Home/Category/CategorySplide";
import { getProducts } from "@/utils/api/product";

const Home = async () => {
  const products = await getProducts();

  return (
    <section>
      {/* <Category /> */}
      <CategorySplide />
      <Card products={products?.products} />
    </section>
  );
};

export default Home;
