import TampilanProduk from "../../views/products";
import { ProductType } from "../../types/product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const halamanhProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanhProdukServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari database sebelum merender halaman.
export async function getServerSideProps() {
  const products = await retrieveProducts<ProductType>("products");

  return {
    props: {
      products,
    },
  };
}