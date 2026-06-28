import Hero from "../components/Hero";
import Products from "../JS/ProductsData";
const Home = () => {
  return (
    <div>
      <Hero Products={Products} />
    </div>
  );
};

export default Home;
