import ProductsData from "../JS/ProductsData";
import ProductDesign from "../components/ProductDesign";
const Products = () => {
  return (
    <div>
      <ProductDesign Products={ProductsData} />
    </div>
  );
};

export default Products;
