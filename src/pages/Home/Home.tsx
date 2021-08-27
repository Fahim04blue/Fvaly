import Banner from 'components/Home/Banner';
import Products from 'components/Home/Products';
import useAsync from 'hooks/useAsync';
import ProductService from 'services/ProductService';

const Home = () => {
  const { data, isLoading } = useAsync(ProductService.getProducts);

  return (
    <>
      <Banner />

      <Products isLoading={isLoading} products={data} />
    </>
  );
};

export default Home;
